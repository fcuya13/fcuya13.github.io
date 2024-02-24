# Generated by Django 5.0.2 on 2024-02-24 03:10

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Pelicula',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titulo', models.CharField(max_length=100)),
                ('siglas', models.CharField(max_length=10)),
                ('year', models.IntegerField()),
                ('href', models.CharField(max_length=100)),
                ('extract', models.TextField()),
                ('thumbnail', models.TextField()),
                ('banner', models.TextField(null=True)),
                ('thumbnail_width', models.FloatField()),
                ('thumbnail_height', models.FloatField()),
                ('path', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Sala',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('siglas', models.CharField(max_length=10)),
                ('nombre', models.CharField(max_length=100)),
                ('direccion', models.TextField()),
                ('imagen', models.TextField()),
                ('path', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Usuario',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=50)),
                ('apellidos', models.CharField(max_length=50)),
                ('correo', models.EmailField(max_length=254, unique=True)),
                ('password', models.CharField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='Ventana',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha', models.DateField()),
                ('hora', models.TimeField()),
            ],
        ),
        migrations.CreateModel(
            name='Funcion',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('pelicula_id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='cineulima.pelicula')),
                ('sala_id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='cineulima.sala')),
                ('ventana_id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='cineulima.ventana')),
            ],
        ),
        migrations.CreateModel(
            name='PeliculaActor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('actor', models.CharField(max_length=100)),
                ('pelicula_id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='cineulima.pelicula')),
            ],
        ),
        migrations.CreateModel(
            name='PeliculaGenero',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('genero', models.CharField(max_length=50)),
                ('pelicula_id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='cineulima.pelicula')),
            ],
        ),
        migrations.CreateModel(
            name='RecomendacionPelicula',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('activo', models.CharField(choices=[('A', 'Activo'), ('I', 'Inactivo')], max_length=10)),
                ('id_pelicula', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='cineulima.pelicula')),
            ],
        ),
        migrations.CreateModel(
            name='Reserva',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cantidad', models.IntegerField()),
                ('funcion', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='cineulima.funcion')),
                ('usuario', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='cineulima.usuario')),
            ],
        ),
    ]
