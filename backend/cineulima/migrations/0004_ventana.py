# Generated by Django 5.0.2 on 2024-02-18 19:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cineulima', '0003_remove_recomendacionpelicula_imgurl_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Ventana',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha', models.DateField()),
                ('hora', models.TimeField()),
            ],
        ),
    ]