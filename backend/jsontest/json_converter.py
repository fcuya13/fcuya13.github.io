import json


def convertir_peliculas(pelicula_string):
    movies_list = []
    generos_list = []
    actores_list = []
    genero_counter = 1
    actor_counter = 1

    for pelicula in pelicula_string:
        movie_dict = {
            "model": "cineulima.pelicula",
            "pk": pelicula['id'],
            "fields": {
                'titulo': pelicula['title'],
                'siglas': pelicula['siglas'],
                'year': pelicula['year'],
                'href': pelicula['href'],
                'extract': pelicula['extract'],
                'thumbnail': pelicula['thumbnail'],
                'thumbnail_width': pelicula['thumbnail_width'],
                'thumbnail_height': pelicula['thumbnail_height'],
                'path': pelicula['path']
            }
        }
        movies_list.append(movie_dict)

        for genero in pelicula['genres']:
            generos_list.append({
                'model': 'cineulima.generopelicula',
                'pk': genero_counter,
                'fields': {
                    'pelicula_id': pelicula['id'],
                    'genero': genero
                }
            })
            genero_counter += 1

        for actor in pelicula['cast']:
            actores_list.append({
                'model': 'cineulima.actorpelicula',
                'pk': actor_counter,
                'fields': {
                    'pelicula_id': pelicula['id'],
                    'actor': actor
                }
            })
            actor_counter += 1

    json_movies = json.dumps(movies_list)
    json_generos = json.dumps(generos_list)
    json_actores = json.dumps(actores_list)
    with open("../seeders/0001_peliculas.json", "w") as peliculas_model_file:
        peliculas_model_file.write(json_movies)

    with open("../seeders/0002_generos.json", "w") as generos_model_file:
        generos_model_file.write(json_generos)

    with open("../seeders/0003_actores.json", "w") as actores_model_file:
        actores_model_file.write(json_actores)


def convertir_salas(salas_string):
    salas_list = []
    for sala in salas_string:
        sala_dict = {
            'model': 'cineulima.sala',
            'pk': sala['id'],
            'fields': {
                'siglas': sala['siglas'],
                'nombre': sala['name'],
                'direccion': sala['address'],
                'imagen': sala['image'],
                'path': sala['path']
            }
        }
        salas_list.append(sala_dict)

    json_salas = json.dumps(salas_list)

    with open("../seeders/0004_salas.json", "w") as salas_model_file:
        salas_model_file.write(json_salas)


JSON_FILE_LOCATION = "../../public"

with open(f'{JSON_FILE_LOCATION}/peliculas.json', "r") as peliculas_file:
    lines = peliculas_file.read()
    peliculas = json.loads(lines)
    convertir_peliculas(peliculas)

with open(f'{JSON_FILE_LOCATION}/salas.json', "r") as salas_file:
    lines = salas_file.read()
    salas = json.loads(lines)
    convertir_salas(salas)
