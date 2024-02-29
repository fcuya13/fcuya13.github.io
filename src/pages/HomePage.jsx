import CarouselPage from '../components/CarouselPage'
import MainNavbar from '../components/MainNavbar'
import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { Helmet } from 'react-helmet';
import {Backdrop, CircularProgress} from "@mui/material";

const HomePage = () => {
    const [recomendaciones, setRecomendaciones] = useState([])
    const [loading, setLoading] = useState(false)

    const obtenerRecomendaciones = async () => {
        setLoading(true)
        try {
            const response = await Promise.race([
                fetch("https://cineulima.azurewebsites.net/cineulima/recomendaciones"),
                new Promise((resolve, reject) => setTimeout(() => reject(new Error('Timeout')),
                    10000))
            ])
            if (response.ok) {
                const data = await response.json();
                setRecomendaciones(data);
                setLoading(false);
            }
        }
        catch (error) {
            navigate('/error/500')
        }
        finally {
            setLoading(false)
        }
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
        <MainNavbar loading={loading} setLoading={setLoading}/>
        <Backdrop
            sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
            open={loading}
        >
            <CircularProgress color="inherit"/>
        </Backdrop>
    </>
}

export default HomePage