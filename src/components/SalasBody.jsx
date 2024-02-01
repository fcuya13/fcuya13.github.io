import { useEffect, useState } from "react";
import CardList2 from "./CardList2";

const SalasBody = ({ searchTerm }) => {
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

    useEffect(() => {
        const filtered = salasData.filter((sala) =>
            sala.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        setFilteredSalas(filtered)
    }, [salasData, searchTerm])

    return (
        <div style={{ marginLeft: '9%' }}>
            <CardList2 list={filteredSalas} />
        </div>
    )
}

export default SalasBody
