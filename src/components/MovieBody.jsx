import { useEffect, useState } from "react"
import CardList from "./CardList"

const MovieBody = ({ searchTerm }) => {
    const [moviesData, setMoviesData] = useState([])
    const [filteredMovies, setFilteredMovies] = useState([])

    const obtenerPeliculas = async () => {
        const response = await fetch("http://localhost:3000/peliculas.json")
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

    return <div style={{ marginLeft: '30px', marginRight: '10px' }}>
        <CardList list={filteredMovies}/>
    </div>
}

export default MovieBody