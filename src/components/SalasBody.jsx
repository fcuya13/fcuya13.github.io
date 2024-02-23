import { useEffect, useState } from "react";
import CardList2 from "./CardList2"
import {Box} from "@mui/material"

const SalasBody = ({ searchTerm, salas }) => {
    const [salasData, setSalasData] = useState([])
    const [filteredSalas, setFilteredSalas] = useState([])

    const obtenerSalas = async () => {
        const response = await fetch("/salas.json")
        const data = await response.json();
        setSalasData(data)
        console.log(salas)
    }

    useEffect(() => {
        obtenerSalas()
    }, [])

    useEffect(() => {
        // Si se busca por un término
        if (searchTerm) {
            const filtered = salasData.filter((sala) =>
            sala.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            setFilteredSalas(filtered)
        }
        // Si se hizo una búsqueda en la barra de búsqueda principal
        else if (salas.length > 0) {
            setFilteredSalas(salas)
        }
        // Si no se ha filtrado ningún contenido
        else {
            setFilteredSalas(salasData)
        }
    }, [salasData, searchTerm, salas])

    // Si buscas por un término y se borra, deberían aparecer todas las salas
    useEffect(() => {
        if (!searchTerm) {
            setFilteredSalas(salasData)
        }
    }, [searchTerm])

    return (
        <Box>
            <CardList2 list={filteredSalas} />
        </Box>
    )
}

export default SalasBody
