from django.db import models


class UsuarioSistema(models.Model):
    nombre = models.CharField(max_length=50)
    apellidos = models.CharField(max_length=50)
    correo = models.EmailField(unique=True)
    password = models.CharField(max_length=20)

class RecomendacionPelicula(models.Model):
    nombre = models.CharField(max_length=100)
    imgUrl = models.URLField(max_length=200)
    path = models.CharField(max_length=100, null=True)

    def __str__(self):
        return self.nombre

