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

const MisReservasPage = () => {

    const [reservas, setReservas] = useState([])
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [loading, setLoading] = useState(false)
    const cargarReservas = async (user_id) => {
        try {
            setLoading(true)
            const response = await fetch(`http://localhost:8000/cineulima/misreservas?user_id=${user_id}`, {
                method: 'GET'
            });

            if (response.status === 200) {
                const data = await response.json()
                setReservas(data)
                setLoading(false)
            }
        } catch (error) {
            console.error(error);
            setLoading(false)
        }
    }

    useEffect(() => {
        const user = JSON.parse(sessionStorage.getItem("user"))
        const user_id = user['id']
        cargarReservas(user_id)
    }, [])

    return (
        <>
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
    )
}

export default MisReservasPage