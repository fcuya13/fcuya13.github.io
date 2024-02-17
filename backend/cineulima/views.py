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
            usuario_login = UsuarioSistema.objects.get(correo=correo)
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
        except UsuarioSistema.DoesNotExist:
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
            new_user = UsuarioSistema(nombre=nombre, apellidos=apellidos, correo=correo, password=password)
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
            user_recovery = UsuarioSistema.objects.get(correo=correo)
            postmark.send_email(user_recovery.correo, "¿Olvidó su contraseña?", f"Su contraseña es {user_recovery.password}")
            return HttpResponse(status=200)
        except UsuarioSistema.DoesNotExist:
            errorMsg = {
                "msg": "Usuario no encontrado"
            }
            return HttpResponse(json.dumps(errorMsg), status=400)
        except Exception as e:
            errorMsg = {
                "msg": e.message
            }
            return HttpResponse(json.dumps(errorMsg), status=400)