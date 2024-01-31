import { useEffect, useState } from "react";
import CardList2 from "./CardList2";

const SalasBody = () => {
    const [salasData, setSalasData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const obtenerSalas = async() => {
        const response = await fetch("http://localhost:3000/salas.json");
        const data = await response.json();
        setSalasData(data);
    }

    useEffect(() =>{
        obtenerSalas();
    }, [])

    const filtrarSalas = (sala) => {
        return sala.name.toLowerCase().includes(searchTerm.toLowerCase())
    }

    return (
        <div style={{ marginLeft: '40px', marginRight: '10px' }}>
            <input
                type="text"
                placeholder="Buscar sala por nombre"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ marginBottom: '10px' }}
            />
            <CardList2 list={salasData.filter(filtrarSalas)} />
        </div>
    )
}

export default SalasBody
