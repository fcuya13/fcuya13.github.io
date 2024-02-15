import json

def convertir_peliculas(pelicula_string):
    generos_list = []
    for pelicula in pelicula_string:
        movie_dict = {
            'id': pelicula['id'],
            'title': pelicula['title'],
            'siglas': pelicula['siglas'],
            'year': pelicula['year'],
            'href': pelicula['href'],
            'extract': pelicula['extract'],
            'thumbnail_width': pelicula['thumbnail_width'],
            'thumbnail_height': pelicula['thumbnail_height'],
            'path': pelicula['path'],
        }

        for genero in pelicula['genres']:
            if genero not in generos_list:
                generos_list.append(genero)


JSON_FILE_LOCATION = "../../public"

with open(f'{JSON_FILE_LOCATION}/peliculas.json', "r") as peliculas_file:
    lines = peliculas_file.read()
    peliculas = json.loads(lines)
    convertir_peliculas(peliculas)


