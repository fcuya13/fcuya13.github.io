import { useEffect, useState } from "react"
import CardList from "./CardList"
import {Box} from "@mui/material"

const MovieBody = ({ searchTerm, moviesData }) => {
    const [filteredMovies, setFilteredMovies] = useState([])

    useEffect(() => {
        //si se busca por un termino 
        if(searchTerm){
            const filtered = moviesData.filter((movie) =>
                movie.titulo?.toLowerCase().includes(searchTerm.toLowerCase())
            )
            setFilteredMovies(filtered)
        }
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