from django.contrib import admin
from .models import *


# Register your models here.

class UsuarioAdmin(admin.ModelAdmin):
    list_display = ["nombre", "apellidos", "correo"]


class PeliculaAdmin(admin.ModelAdmin):
    list_display = ["titulo", "path"]


class PeliculaActor(admin.ModelAdmin):
    list_display = ["pelicula_id", "actor"]


class PeliculaGeneroAdmin(admin.ModelAdmin):
    list_display = ["pelicula_id", "genero"]


class SalaAdmin(admin.ModelAdmin):
    list_display = ["nombre", "direccion"]


admin.site.register(Usuario, UsuarioAdmin)
admin.site.register(Pelicula, PeliculaAdmin)
admin.site.register(PeliculaActor, UsuarioAdmin)
admin.site.register(PeliculaGenero, UsuarioAdmin)
admin.site.register(Sala, SalaAdmin)
admin.site.register(RecomendacionPelicula)
