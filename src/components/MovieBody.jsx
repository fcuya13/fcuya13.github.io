import { useEffect, useState } from "react"
import CardList from "./CardList"

const MovieBody = () => {
    const [moviesData, setMoviesData] = useState([])

    const obtenerPeliculas = async () => {
        const response = await fetch("http://localhost:3000/peliculas.json")
        const data = await response.json()
        setMoviesData(data)
    }

    useEffect(() => {
        obtenerPeliculas()
    }, [])

    return <div style={{ marginLeft: '30px', marginRight: '10px' }}>
        <CardList list={moviesData}/>
    </div>
}

export default MovieBody
