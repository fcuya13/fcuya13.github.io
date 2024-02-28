import CarouselPage from '../components/CarouselPage'
import MainNavbar from '../components/MainNavbar'
import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { Helmet } from 'react-helmet';

const HomePage = () => {
    const [recomendaciones, setRecomendaciones] = useState([])

    const obtenerRecomendaciones = async () => {
        const response = await fetch("http://localhost:8000/cineulima/recomendaciones")
        const data = await response.json()
        setRecomendaciones(data)
    }

    useEffect(() =>{
        obtenerRecomendaciones()
    },[])

    const navigate = useNavigate()
    const checkLoggedIn = () => {
        const user = sessionStorage.getItem("user");

        if (!user) {
            navigate('/login')
        }
    }
    useEffect(() => {
        checkLoggedIn()
    })

    return <>
        <Helmet>
            <title>Inicio | Cine Ulima</title>
        </Helmet>
        <CarouselPage recomendaciones = { recomendaciones }/>
        <MainNavbar/>
    </>
}

export default HomePage