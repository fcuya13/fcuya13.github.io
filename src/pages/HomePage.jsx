import CarouselPage from '../components/CarouselPage'
import MainNavbar from '../components/MainNavbar'
import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'

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

    return <div>
        <CarouselPage recomendaciones = { recomendaciones }/>
        <MainNavbar/>
    </div>
}

export default HomePage