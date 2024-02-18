from django.contrib import admin
from .models import *


# Register your models here.

class UsuarioAdmin(admin.ModelAdmin):
    list_display = ["nombre", "apellidos", "correo"]


class PeliculaAdmin(admin.ModelAdmin):
    list_display = ["titulo", "path"]


class PeliculaActorAdmin(admin.ModelAdmin):
    list_display = ["pelicula_id", "actor"]


class PeliculaGeneroAdmin(admin.ModelAdmin):
    list_display = ["pelicula_id", "genero"]


class SalaAdmin(admin.ModelAdmin):
    list_display = ["nombre", "direccion"]


class RecoPeliculaAdmin(admin.ModelAdmin):
    list_display = ["id_pelicula", "activo"]


class FuncionAdmin(admin.ModelAdmin):
    list_display = ["pelicula_id", "sala_id", "ventana_id"]


admin.site.register(Usuario, UsuarioAdmin)
admin.site.register(Pelicula, PeliculaAdmin)
admin.site.register(PeliculaActor, PeliculaActorAdmin)
admin.site.register(PeliculaGenero, PeliculaGeneroAdmin)
admin.site.register(Sala, SalaAdmin)
admin.site.register(RecomendacionPelicula, RecoPeliculaAdmin)
admin.site.register(Ventana)
admin.site.register(Funcion, FuncionAdmin)
