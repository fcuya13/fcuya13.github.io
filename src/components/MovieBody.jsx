import { useEffect, useState } from "react"
import CardList from "./CardList"
import {Box} from "@mui/material";

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
        const filtered = moviesData.filter((movie) =>
            movie.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
        setFilteredMovies(filtered)
    }, [moviesData, searchTerm])

    return (
        <Box sx={{marginLeft: {sm:"8.5%" }}}>
            <CardList list={filteredMovies}/>
        </Box>
    )
}

export default MovieBody