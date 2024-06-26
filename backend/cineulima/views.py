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
            "id": new_user.pk,
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
                'titulo': pelicula.titulo,
                'thumbnail': pelicula.thumbnail,
                'path': pelicula.path,
                # flat=true para que no devuelva tuplas sino como lista plana
                'genres': list(pelicula.peliculagenero_set.values_list('genero', flat=True)),
                'cast': list(pelicula.peliculaactor_set.values_list('actor', flat=True))
            })

        for sala in sala_resultados:
            dataResponse['salas'].append({
                'id': sala.id,
                'nombre': sala.nombre,
                'direccion': sala.direccion,
                'imagen': sala.imagen,
                'path': sala.path,
                'horarios': obtener_horas_disponibles(sala)
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
        fechas_formatted = [{"display": fecha.strftime("%b %d, %Y"),
         "value": fecha.strftime("%Y-%m-%d")} for fecha in fechas_sorted]

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
                        "funcion_id": funcion.pk,
                        "hora": str(ventana.hora.strftime("%H:%M")),
                        "horaValue": ventana.hora
                    }
                    ventanas_list.append(ventana_info)

            if ventanas_list:
                ventanas_list_ordenadas = sorted(ventanas_list, key=lambda x: x["horaValue"])
                for v in ventanas_list_ordenadas:
                    v.pop("horaValue", None)
                dataResponse.append({
                    "sala_id": sala.pk,
                    "siglas": sala.siglas,
                    "nombre": sala.nombre,
                    "direccion": sala.direccion,
                    "ventanas": ventanas_list_ordenadas
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
            postmark = PostmarkService()
            postmark.send_email(usuario_login.correo, "Su reserva en Salas de Cine ULima",
                                    f"Pelicula:  {funcion_obj.pelicula_id}\nSala: {funcion_obj.sala_id}\nFecha: {funcion_obj.ventana_id}\nEntradas:{cantidad}")
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
            reservas = reservas.order_by("-id")
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


def cargarSalas(request):
    if request.method == "GET":
        filtro = request.GET.get("filtro")
        if filtro == "":
            salas = Sala.objects.all()
        else:
            salas = Sala.objects.filter(
                Q(nombre__icontains = filtro) |
                Q(path=filtro)).distinct()

        dataResponse = []
        for sala in salas:
                funciones = Funcion.objects.filter(sala_id=sala.pk)
                        
                dataResponse.append({
                    "id": sala.pk,
                    "siglas": sala.siglas,
                    "nombre": sala.nombre,
                    "direccion": sala.direccion,
                    "imagen": sala.imagen,
                    "path": sala.path,
                    "horarios": obtener_horas_disponibles(sala)
                })

        return HttpResponse(json.dumps(dataResponse), status=200)

def cargarSalaInfo(request):
    if request.method == "GET":
        filtro = request.GET.get("filtro")
        salas = None
        if filtro == "":
            salas = Sala.objects.all()
        else:
            salas = Sala.objects.filter(path__icontains = filtro)
        dataResponse = None
        for sala in salas:
                funciones = Funcion.objects.filter(sala_id=sala.pk)
                horarios = []
                for funcion in funciones:
                    hora = str(funcion.ventana_id.hora.strftime("%H:%M"))
                    if hora not in horarios:
                        horarios.append(hora)
                horarios = [datetime.strptime(h, '%H:%M') for h in horarios]
                sorted_horarios = sorted(horarios)
                sorted_horarios_list = [str(hora.strftime("%H:%M")) for hora in sorted_horarios]

                dataResponse = {
                    "id": sala.pk,
                    "siglas": sala.siglas,
                    "nombre": sala.nombre,
                    "direccion": sala.direccion,
                    "imagen": sala.imagen,
                    "path": sala.path,
                    "horarios": sorted_horarios_list
                }
        return HttpResponse(json.dumps(dataResponse), status=200)

def salaInfoEndpoint(request):
    if request.method == "GET":
        fecha = request.GET.get("fecha")
        salaid = request.GET.get("salaid")
        dataResponse = []

        for pelicula in Pelicula.objects.all():
            funciones = Funcion.objects.filter(sala_id=salaid, pelicula_id=pelicula.pk)

            ventanas_list = []

            for funcion in funciones:
                ventanas = Ventana.objects.filter(fecha=fecha, pk=funcion.ventana_id.pk)

                for ventana in ventanas:
                    ventana_info = {
                        "funcion_id": funcion.pk,
                        "hora": str(ventana.hora.strftime("%H:%M")),
                        "horaValue": ventana.hora
                    }

                    ventanas_list.append(ventana_info)


            if ventanas_list:
                ventanas_list_ordenadas = sorted(ventanas_list, key=lambda x: x["horaValue"])
                for v in ventanas_list_ordenadas:
                    v.pop("horaValue", None)
                dataResponse.append({
                    "pelicula_id": pelicula.pk,
                    "nombre": pelicula.titulo,
                    "descripcion": pelicula.extract,
                    "ventanas": ventanas_list_ordenadas,
                    "siglas" : pelicula.siglas
                })

        return HttpResponse(json.dumps(dataResponse))

def cargarPeliculas(request):
    if request.method == "GET":
        filtro = request.GET.get("filtro")
        if filtro == "":
            peliculas = Pelicula.objects.all()
        else:
            peliculas = Pelicula.objects.filter(
                Q(titulo__icontains = filtro) |
                Q(path=filtro)).distinct()

        dataResponse = []
        for pelicula in peliculas:
                generos_queryset = PeliculaGenero.objects.filter(pelicula_id=pelicula)
                genres = [genero.genero for genero in generos_queryset]
                cast_queryset = PeliculaActor.objects.filter(pelicula_id=pelicula)
                cast = [actor.actor for actor in cast_queryset]

                dataResponse.append({
                    "id": pelicula.pk,
                    "titulo": pelicula.titulo,
                    "siglas": pelicula.siglas,
                    "year":pelicula.year,
                    "href": pelicula.href,
                    "extract": pelicula.extract,
                    "thumbnail": pelicula.thumbnail,
                    "banner": pelicula.banner,
                    "thumbnail_width": pelicula.thumbnail_width,
                    "thumbnail_heigth": pelicula.thumbnail_height,
                    "path": pelicula.path,
                    "genres":genres,
                    "cast":cast
                })

        return HttpResponse(json.dumps(dataResponse), status=200)

def cargarFuncionInfo(request):
    if request.method == "GET":
        funcionid = request.GET.get("funcionid")
        funcion = Funcion.objects.get(pk=funcionid)

        dataResponse = {
            "titulo_peli": funcion.pelicula_id.titulo,
            "thumbnail": funcion.pelicula_id.thumbnail,
            "nombre_sala": funcion.sala_id.nombre,
            "direccion": funcion.sala_id.direccion,
            "fecha": str(funcion.ventana_id.fecha.strftime("%d/%m/%Y")),
            "hora":str(funcion.ventana_id.hora.strftime("%H:%M"))
        }
        return HttpResponse(json.dumps(dataResponse), status=200)

"""
def obtenerVentanasParaPeliculas(request):
    if request.method=="GET":
        peliculaid=request.GET.get("id")
        fechafiltro=request.GET.get("fecha")

        funciones=None
        dataResponse=[]
        salas={}
        funciones = Funcion.objects.filter(pelicula_id=peliculaid)

        if fechafiltro:
            try:
                fechafiltro = str(datetime.strptime(fechafiltro, "%b %d, %Y").date())
                funciones = funciones.filter(ventana_id__fecha=fechafiltro)
            except ValueError:
                pass

        if horafiltro:
            try:
                horafiltro = str(datetime.strptime(horafiltro, "%H:%M").time())
                funciones = funciones.filter(ventana_id__hora=horafiltro)
            except ValueError:
                pass

        for funcion in funciones:
            nombresala=funcion.sala_id.nombre
            siglassala=funcion.sala_id.siglas
            funcionid=funcion.pk
            fecha = str(funcion.ventana_id.fecha.strftime("%b %d, %Y"))
            hora = str(funcion.ventana_id.hora.strftime("%H:%M"))
            
            if nombresala not in salas:
                salas[nombresala]={
                    "siglas":siglassala,
                    "fechas":{}
                }
            if fecha not in salas[nombresala]["fechas"]:
                salas[nombresala]["fechas"][fecha]=[]

            horariofuncion={
                "hora":hora,
                "funcionid":funcionid
            }

            salas[nombresala]["fechas"][fecha].append(horariofuncion)

        for nombresala, info in salas.items():
            fechas=[]
            for fecha,horarios in sorted(info["fechas"].items()):
                sortedHorarios=sorted(horarios, key=lambda x: x['hora'])
                fechasDict={
                    "fecha":fecha,
                    "horarios":sortedHorarios
                }
                fechas.append(fechasDict)
            salaDict={
                "nombresala":nombresala,
                "siglas":info["siglas"],
                "fechas": fechas
            }
            dataResponse.append(salaDict)
        return HttpResponse(json.dumps(dataResponse), status=200)
"""


            