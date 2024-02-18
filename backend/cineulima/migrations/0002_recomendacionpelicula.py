# Generated by Django 5.0.2 on 2024-02-17 21:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cineulima', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='RecomendacionPelicula',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=100)),
                ('imgUrl', models.URLField()),
                ('path', models.CharField(max_length=100, null=True)),
            ],
        ),
    ]