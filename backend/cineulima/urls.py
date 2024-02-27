from django.urls import path

from .views import *

urlpatterns = [
    path('users', usuariosEndpoint),
    path('createuser', createUsersEndpoint),
    path('recovery', passwordRecoveryEndpoint),
    path('recomendaciones', verRecomendacionesPeliculasEndPoint),
    path('busqueda/<str:filtro>',buscarContenidoEndPoint),
    path('peliculainfofecha', peliculaInfoEndpoint),
    path('fechas', getFechasEndpoint),
    path('reserva', reservaEndpoint),
    path('misreservas', misReservasEndpoint),
    path('salas', cargarSalas),
    path('salainfofecha', salaInfoEndpoint),
    path('sala/<str:filtro>',cargarSala),
    path('peliculas', cargarPeliculas)
]
