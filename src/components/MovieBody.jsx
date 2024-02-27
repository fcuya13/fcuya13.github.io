import { useEffect, useState } from "react"
import CardList from "./CardList"
import {Box} from "@mui/material"

const MovieBody = ({ searchTerm, movies, moviesData }) => {
    const [filteredMovies, setFilteredMovies] = useState([])

    useEffect(() => {
        //si se busca por un termino 
        if(searchTerm){
            const filtered = moviesData.filter((movie) =>
            movie.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
            setFilteredMovies(filtered)
        }
        //si se hizo una busqueda en la barra de busqueda principal
        else if(movies.length > 0){
            setFilteredMovies(movies)
        }
        //si no se ha filtrado ningun contenido
        else{
            setFilteredMovies(moviesData)
        }
    }, [moviesData, searchTerm, movies])

    //si buscas por un termino y se borra deberia aparecer todas las peliculas
    useEffect(() => {
        if (!searchTerm) {
            setFilteredMovies(moviesData)
        }
    }, [searchTerm])

    return (
        <Box>
            <CardList list={filteredMovies}/>
        </Box>
    )
}

export default MovieBody