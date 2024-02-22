import { useEffect, useState } from "react";
import CardList2 from "./CardList2";

const SalasBody = ({ searchTerm, salas }) => {
    const [salasData, setSalasData] = useState([])
    const [filteredSalas, setFilteredSalas] = useState([])

    const obtenerSalas = async() => {
        const response = await fetch("/salas.json")
        const data = await response.json()
        setSalasData(data)
    }

    useEffect(() =>{
        obtenerSalas();
    }, [])
    

    //si buscas por un termino y se borra deberia aparecer todas las peliculas
    useEffect(() => {
        if (!searchTerm) {
            setFilteredSalas(salasData)
        }
    }, [searchTerm])


    return (
        <div>
            <CardList2 list={filteredSalas} />
        </div>
    )
}

export default SalasBody
