import { useEffect, useState } from "react"
import CardList from "./CardList"
import {Box} from "@mui/material";
import e from "cors";

const MovieBody = ({ searchTerm }) => {
    const [moviesData, setMoviesData] = useState([])
    const [filteredMovies, setFilteredMovies] = useState([])

    const obtenerPeliculas = async () => {
        const response = await fetch("/peliculas.json")
        const data = await response.json()
        setMoviesData(data)
    }
    
    useEffect(() => {
        obtenerPeliculas()
    }, [])

    useEffect(() => {
        if(searchTerm){
            const filtered = moviesData.filter((movie) =>
            movie.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
            setFilteredMovies(filtered)
        }
        /*else if(movies){
            setFilteredMovies(movies)
        }*/
        else{
            setFilteredMovies(moviesData)
        }
    }, [moviesData, searchTerm])

    return (
        <Box>
            <CardList list={filteredMovies}/>
        </Box>
    )
}

export default MovieBody