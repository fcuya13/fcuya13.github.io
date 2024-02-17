from django.db import models


class Usuario(models.Model):
    nombre = models.CharField(max_length=50)
    apellidos = models.CharField(max_length=50)
    correo = models.EmailField(unique=True)
    password = models.CharField(max_length=20)


class RecomendacionPelicula(models.Model):
    nombre = models.CharField(max_length=100)
    imgUrl = models.URLField(max_length=200)
    path = models.CharField(max_length=100, null=True)


class Pelicula(models.Model):
    titulo = models.CharField(max_length=100)
    siglas = models.CharField(max_length=10)
    year = models.IntegerField()
    href = models.CharField(max_length=100)
    extract = models.TextField()
    thumbnail = models.TextField()
    thumbnail_width = models.FloatField()
    thumbnail_height = models.FloatField()
    path = models.CharField(max_length=50)

    def __str__(self):
        return self.titulo


class Sala(models.Model):
    siglas = models.CharField(max_length=10)
    nombre = models.CharField(max_length=100)
    direccion = models.TextField()
    imagen = models.TextField()
    path = models.TextField()

    def __str__(self):
        return self.nombre


class PeliculaActor(models.Model):
    actor = models.CharField(max_length=100)
    pelicula_id = models.ForeignKey(Pelicula, on_delete=models.SET_NULL, null=True)


class PeliculaGenero(models.Model):
    genero = models.CharField(max_length=50)
    pelicula_id = models.ForeignKey(Pelicula, on_delete=models.SET_NULL, null=True)
