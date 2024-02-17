import CarouselPage from '../components/CarouselPage'
import MainNavbar from '../components/MainNavbar'
import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

const HomePage = () => {

    const navigate = useNavigate()
    const checkLoggedIn = () => {
        const user = sessionStorage.getItem("user");

        if (!user) {
            navigate('/login')
        }
    }
    useEffect(() => {
        checkLoggedIn()
    });

    return <div>
        <CarouselPage/>
        <MainNavbar/>
    </div>
}

export default HomePage