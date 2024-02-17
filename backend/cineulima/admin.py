from django.contrib import admin
from .models import *


# Register your models here.

class UsuarioAdmin(admin.ModelAdmin):
    list_display = ["nombre", "apellidos", "correo"]


admin.site.register(UsuarioSistema, UsuarioAdmin)
admin.site.register(RecomendacionPelicula)