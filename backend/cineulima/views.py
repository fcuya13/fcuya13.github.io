import json
import urllib.parse
from .services.PostmarkServices import PostmarkService
import requests
from django.http import HttpResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.db.utils import IntegrityError

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
            postmark.send_email(user_recovery.correo, "¿Olvidó su contraseña?", f"Su contraseña es {user_recovery.password}")
            return HttpResponse(status=200)
        except Usuario.DoesNotExist:
            errorMsg = {
                "msg": "Usuario no encontrado"
            }
            return HttpResponse(json.dumps(errorMsg), status=400)
        except Exception as e:
            errorMsg = {
                "msg": e.message
            }
            return HttpResponse(json.dumps(errorMsg), status=400)

def verRecomendacionesEndPoint(request):
    recomendaciones = RecomendacionPelicula.objects.all()

    lista_peliculas = []

    for pelicula in recomendaciones:
        pelicula_info = {
            'nombre': pelicula.nombre,
            'img': pelicula.imgUrl,
            'path': pelicula.path
        }
        lista_peliculas.append(pelicula_info)

    return HttpResponse(json.dumps(lista_peliculas))

#Si el msg: "" no se encontraron resultados o no ingreso nada en el textfield

""" 
def buscarContenidoEndPoint(request,filtro):
    if request.method == "GET":
        buscar = filtro

        if buscar == "":
            respuesta = {
                'msg': ""
            }
            return HttpResponse(json.dumps(respuesta))
        else:
            listaPeliculasFiltrado = Pelicula.objects.filter(nombre__contains=buscar)

            dataResponse = []

            if len(listaPeliculasFiltrado)>0:
                for pelicula in listaPeliculasFiltrado:
                    dataResponse.append({
                        "id": pelicula.pk,
                        "title": pelicula.title,
                        "year": pelicula.year,
                        "genres": pelicula.genres,
                        "extract": pelicula.extract,
                        "thumbnail": pelicula.thumbnail,
                        "path": pelicula.path,
                        "salas": pelicula.salas,
                        "available_times": pelicula.available_times
                    })
                return HttpResponse(json.dumps(dataResponse))
            
            listaSalasFiltrado = Sala.objects.filter(nombre__contains=buscar)

            dataResponse = []

            if len(listaSalasFiltrado)>0:
                for sala in listaSalasFiltrado:
                    dataResponse.append({
                        "id": sala.pk,
                        "name": sala.name,
                        "address": sala.address,
                        "image": sala.image,
                        "available_times": sala.available_times,
                        "path": sala.path,
                        "path": sala.path,
                        "peliculas": pelicula.peliculas,
                    })
                return HttpResponse(json.dumps(dataResponse))
            
            respuesta = {
                "msg": ""
            }

            return HttpResponse(json.dumps(respuesta)) 
"""
                





    