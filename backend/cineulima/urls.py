from django.urls import path

from .views import *

urlpatterns = [
    path('users', usuariosEndpoint),
    path('createuser', createUsersEndpoint),
    path('recovery', passwordRecoveryEndpoint),
    path('recomendaciones', verRecomendacionesPeliculasEndPoint),
    path('busqueda/<str:filtro>',buscarContenidoEndPoint),
    path('peliculainfofecha', peliculaInfoEndpoint),
    path('fechas', getFechasEndpoint)
]
