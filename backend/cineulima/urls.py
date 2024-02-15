from django.urls import path

from .views import *

urlpatterns = [
    path('users', usuariosEndpoint),
    path('createuser', createUsersEndpoint),
    path('recovery', passwordRecoveryEndpoint)
]