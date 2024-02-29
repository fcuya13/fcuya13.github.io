import PageLayout from "../components/PageLayout"
import {
    Container,
    Typography,
    Box,
    CircularProgress,
    Backdrop
} from "@mui/material"
import {useState, useEffect} from "react"
import CardList3 from "../components/CardList3";
import {Helmet} from "react-helmet";
import {useNavigate} from "react-router-dom";

const MisReservasPage = () => {
    const [reservas, setReservas] = useState([])
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const cargarReservas = async (user_id) => {
        try {
            setLoading(true)
            const response = await Promise.race([
                fetch(`https://cineulima.azurewebsites.net/cineulima/misreservas?user_id=${user_id}`),
                new Promise((resolve, reject) => setTimeout(() => reject(new Error('Timeout')),
                10000))
            ])

            if (response.status === 200) {
                const data = await response.json();
                setReservas(data);
                setLoading(false)
            }
        }
        catch (error) {
            navigate('/error/500')
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        const user = JSON.parse(sessionStorage.getItem("user"))
        const user_id = user['id']
        cargarReservas(user_id)
    }, [])

    return <>
        <Helmet>
            <title>Mis reservas | Cine Ulima</title>
        </Helmet>
            <PageLayout>
                <Container>
                    <Typography
                        variant="h4"
                        sx={{
                            borderBottom: '1px solid #0000001F',
                            marginBottom: '5%',
                            marginTop: "25px",
                            fontSize: '34px',
                            fontWeight: 400,
                            letterSpacing: 0.25
                        }}>Mis Reservas</Typography>
                    <Box>
                        <CardList3 reservas={reservas}/>
                    </Box>
                </Container>
                <Backdrop
                    sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                    open={loading}
                >
                    <CircularProgress color="inherit"/>
                </Backdrop>
            </PageLayout>
    </>

}

export default MisReservasPage