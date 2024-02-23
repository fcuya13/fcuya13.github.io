import json
import urllib.parse
from .services.PostmarkServices import PostmarkService
import requests
from django.http import HttpResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.db.utils import IntegrityError
from datetime import datetime
from django.db.models import Q

from .models import *


# Create your views here.
@csrf_exempt
def usuariosEndpoint(request):
    if request.method == 'POST':
        data = request.body
        user_data = json.loads(data)
        correo = user_data['correo']
        password = user_data['password']

        try:
            usuario_login = Usuario.objects.get(correo=correo)
            if usuario_login.password != password:
                errorMsg = {
                    "msg": "Contraseña incorrecta"
                }
                return HttpResponse(json.dumps(errorMsg), status=400)

            dataResponse = {
                "id": usuario_login.pk,
                "nombre": usuario_login.nombre,
                "apellidos": usuario_login.apellidos,
                "correo": usuario_login.correo
            }
            return HttpResponse(json.dumps(dataResponse), status=200)
        except Usuario.DoesNotExist:
            errorMsg = {
                "msg": "Usuario no encontrado"
            }
            return HttpResponse(json.dumps(errorMsg), status=400)


@csrf_exempt
def createUsersEndpoint(request):
    if request.method == 'POST':
        data = request.body
        user_data = json.loads(data)
        nombre = user_data['nombre']
        apellidos = user_data['apellidos']
        correo = user_data['correo']
        password = user_data['password']

        try:
            new_user = Usuario(nombre=nombre, apellidos=apellidos, correo=correo, password=password)
            new_user.save()
        except IntegrityError:
            errorMsg = {
                "msg": "Correo ya registrado. Ingrese un correo diferente"
            }
            return HttpResponse(json.dumps(errorMsg), status=400)

        dataResponse = {
            "id": usuario_login.pk,
            "nombre": new_user.nombre,
            "apellidos": new_user.apellidos,
            "correo": new_user.correo
        }
        return HttpResponse(json.dumps(dataResponse), status=200)


@csrf_exempt
def passwordRecoveryEndpoint(request):
    if request.method == 'POST':
        postmark = PostmarkService()
        data = request.body
        user_data = json.loads(data)
        correo = user_data['correo']
        try:
            user_recovery = Usuario.objects.get(correo=correo)
            postmark.send_email(user_recovery.correo, "¿Olvidó su contraseña?",
                                f"Su contraseña es {user_recovery.password}")
            return HttpResponse(status=200)
        except Usuario.DoesNotExist:
            errorMsg = {
                "msg": "Usuario no encontrado"
            }
            return HttpResponse(json.dumps(errorMsg), status=400)
        except Exception as e:
            print(e)
            errorMsg = {
                "msg": e.message
            }
            return HttpResponse(json.dumps(errorMsg), status=400)


def verRecomendacionesPeliculasEndPoint(request):
    # Solo filtra a las recomendaciones que estan activas
    recomendaciones = RecomendacionPelicula.objects.filter(activo='A')
    dataResponse = []

    for recomendacion in recomendaciones:
        pelicula = recomendacion.id_pelicula
        if pelicula:
            pelicula_info = {
                'titulo': pelicula.titulo,
                'banner': pelicula.banner,
                'path': pelicula.path
            }
            dataResponse.append(pelicula_info)

    return HttpResponse(json.dumps(dataResponse))


# Si el msg: "" no se encontraron resultados o no ingreso nada en el textfield
def buscarContenidoEndPoint(request, filtro):
    if request.method == 'GET':
        peliculas_resultados = Pelicula.objects.filter(
            Q(titulo__icontains=filtro) |
            Q(year__icontains=filtro) |
            Q(peliculagenero__genero__icontains=filtro) |
            Q(peliculaactor__actor__icontains=filtro)
        ).distinct()

        sala_resultados = Sala.objects.filter(nombre__icontains=filtro)

        dataResponse = {
            'peliculas': [],
            'salas': []
        }
        for pelicula in peliculas_resultados:
            dataResponse['peliculas'].append({
                'id': pelicula.pk,
                'title': pelicula.titulo,
                'thumbnail': pelicula.thumbnail,
                'path': pelicula.path,
                # flat=true para que no devuelva tuplas sino como lista plana
                'genres': list(pelicula.peliculagenero_set.values_list('genero', flat=True)),
                'cast': list(pelicula.peliculaactor_set.values_list('actor', flat=True))
            })

        for sala in sala_resultados:
            dataResponse['salas'].append({
                'id': sala.id,
                'name': sala.nombre,
                'address': sala.direccion,
                'image': sala.imagen,
                'path': sala.path,
                'available_times': obtener_horas_disponibles(sala)
            })

        return HttpResponse(json.dumps(dataResponse))


def obtener_horas_disponibles(sala):
    horarios = set()
    funciones = Funcion.objects.filter(sala_id=sala.pk)

    for funcion in funciones:
        ventanas = Ventana.objects.filter(pk=funcion.ventana_id.pk)

        for ventana in ventanas:
            horarios.add(str(ventana.hora.strftime("%H:%M")))
    
    lista_horarios = sorted(list(horarios))

    return lista_horarios


def getFechasEndpoint(request):
    if request.method == "GET":
        ventanas = Ventana.objects.all()

        fechas = list(set(ventana.fecha for ventana in ventanas))
        fechas_sorted = sorted(fechas)
        fechas_formatted = [fecha.strftime("%d/%m/%Y") for fecha in fechas_sorted]

        return HttpResponse(json.dumps(fechas_formatted, default=str))


""" 
url = /cineulima/peliculainfofecha?fecha=2024-03-01&movieid=1    -> GET
fecha en formato YYYY-MM-DD
Response = [{
            "sala_id": 1,
            "nombre": "Cineplanet",
            "direccion": "ulima",
            "ventanas": [{
                "ventana_id": 2,
                "hora": "17:00"
            }]
        }] 
no carga la info de la pelicula, solo la parte de abajo pelicula x sala
"""


def peliculaInfoEndpoint(request):
    if request.method == "GET":
        fecha = request.GET.get("fecha")
        peliculaid = request.GET.get("movieid")
        dataResponse = []

        for sala in Sala.objects.all():
            funciones = Funcion.objects.filter(sala_id=sala.pk, pelicula_id=peliculaid)

            ventanas_list = []

            for funcion in funciones:
                ventanas = Ventana.objects.filter(fecha=fecha, pk=funcion.ventana_id.pk)

                for ventana in ventanas:
                    ventana_info = {
                        "ventana_id": ventana.pk,
                        "hora": str(ventana.hora.strftime("%H:%M"))
                    }
                    ventanas_list.append(ventana_info)

            if ventanas_list:
                dataResponse.append({
                    "sala_id": sala.pk,
                    "nombre": sala.nombre,
                    "direccion": sala.direccion,
                    "ventanas": ventanas_list
                })

        return HttpResponse(json.dumps(dataResponse))


@csrf_exempt
def reservaEndpoint(request):
    if request.method == 'POST':
        data = request.body
        user_data = json.loads(data)
        print(data)
        correo = user_data['correo']
        cantidad = user_data['cantidad']
        funcion = user_data['funcionid']

        try:
            usuario_login = Usuario.objects.get(correo=correo)
            funcion_obj = Funcion.objects.get(pk=funcion)

            reserva = Reserva(
                usuario=usuario_login,
                funcion=funcion_obj,
                cantidad=cantidad
            )
            reserva.save()
            dataResponse = {
                "msg": ""
            }
            return HttpResponse(json.dumps(dataResponse), status=200)
        except Usuario.DoesNotExist or Funcion.DoesNotExist:
            errorMsg = {
                "msg": "Correo no registrado"
            }
            return HttpResponse(json.dumps(errorMsg), status=400)


def misReservasEndpoint(request):
    if request.method == "GET":
        user_id = request.GET.get("user_id")
        try:
            usuario = Usuario.objects.get(pk=user_id)
            reservas = Reserva.objects.filter(usuario=usuario.pk)

            dataResponse = []
            for reserva in reservas:
                dataResponse.append({
                    "thumbnail": reserva.funcion.pelicula_id.thumbnail,
                    "titulo": reserva.funcion.pelicula_id.titulo,
                    "fecha": str(reserva.funcion.ventana_id.fecha.strftime("%d-%m-%Y")),
                    "hora": str(reserva.funcion.ventana_id.hora.strftime("%H:%M")),
                    "sala": reserva.funcion.sala_id.nombre,
                    "entradas": reserva.cantidad
                })

            return HttpResponse(json.dumps(dataResponse), status=200)
        except Usuario.DoesNotExist:
            return HttpResponse(status=400)
