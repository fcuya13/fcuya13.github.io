import {
    Container,
    Typography,
    Grid,
    Button,
    TextField,
    Divider,
    Box,
    Card,
    CardContent,
    CardMedia,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Alert, CircularProgress, Backdrop
} from "@mui/material"
import {useEffect, useState} from "react"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import PageLayout from "../components/PageLayout"
import {useLocation, useNavigate} from "react-router-dom"
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import {Helmet} from "react-helmet";

const ReservaPage = () => {

    const user = sessionStorage.getItem("user")
    const userJSON = JSON.parse(user)

    const [nombre, setNombre] = useState(userJSON ? userJSON.nombre : "")
    const [apellido, setApellido] = useState(userJSON ? userJSON.apellidos : "")
    const [codigo, setCodigo] = useState(userJSON ? userJSON.correo : "")
    const [cantidad, setCantidad] = useState("")
    const [open, setOpen] = useState(false)
    const [error, setError] = useState(false)
    const [infoFuncion, setInfoFuncion] = useState(null)
    const [loading, setLoading] = useState(false)


    const location = useLocation()
    const funcionid = location.state.datos
    const navigate = useNavigate()

    const getFuncionInfo = async () => {
        try{
            setLoading(true)
            const response = await Promise.race([
                fetch(`https://cineulima.azurewebsites.net/cineulima/funcioninfo?funcionid=${funcionid}`),
                new Promise((_, reject) =>
                    setTimeout(() => reject(new Error('Tiempo de espera excedido')), 40000)
                )
            ])
            if(response.ok){
                const data = await response.json()
                setInfoFuncion(data)
            }
        }
        catch (error){
            navigate('/error/500')
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if(funcionid){
            getFuncionInfo()
        }
    }, [funcionid]);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false)
        navigate("/misreservas")
    }

    const handleReservar = async () => {
        const email = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        if (
            nombre.trim().length !== 0 &&
            apellido.trim().length !== 0 &&
            codigo.trim().length !== 0 &&
            cantidad.trim().length !== 0 &&
            !isNaN(cantidad) &&
            parseInt(cantidad) > 0 &&
            email.test(codigo.trim())
        ) {
            try {
                setLoading(true)
                const response = await fetch('https://cineulima.azurewebsites.net/cineulima/reserva', {
                    method: 'POST',
                    body: JSON.stringify({
                        correo: codigo,
                        funcionid: funcionid,
                        cantidad: cantidad
                    })
                });
                const data = await response.json()
                if (data.msg === "") {
                    setLoading(false)
                    handleOpen();
                    setError(false);
                } else {
                    throw new Error('Error al crear la reserva');
                    setLoading(false)
                }
            } catch (error) {
                console.error(error);
                setError(true);
                setLoading(false)
            }
        } else {
            setError(true);
        }
    }

    return <>
        <Helmet>
            <title>Reservar entradas | Cine Ulima</title>
        </Helmet>
            <PageLayout>
                {infoFuncion &&
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
                        }}>Reserva</Typography>
                    <Container>
                        <Container sx={{mt: 5}}>
                            <Typography variant="h4" sx={{mb: 2}}>
                                {infoFuncion.titulo_peli}
                            </Typography>
                            <Typography variant="subtitle1" color="gray" sx={{mb: 2, display: 'inline-flex'}}>
                                <AccessTimeIcon sx={{mr: 1}}/>
                                <Typography color="#009CD2">
                                    {infoFuncion.fecha} - {infoFuncion.hora}
                                </Typography>
                                <LocationOnIcon sx={{mx: 1}}/>
                                <Typography color="#009CD2">
                                    {infoFuncion.nombre_sala}
                                </Typography>
                            </Typography>
                        </Container>
                        <Grid container spacing={2} sx={{justifyContent: {xs: "center", sm: "left"}}}>
                            <Grid item sm={7}>
                                <Card variant="outlined">
                                    <CardContent>
                                        <Typography variant="h6">Información de reserva</Typography>

                                        <Divider
                                            sx={{borderBottomWidth: 2, borderColor: "gray"}}
                                        />
                                        <Grid container rowSpacing={2} sx={{mt: 1}}>
                                            <Grid item xs={12}>
                                                <TextField
                                                    label="Nombre"
                                                    fullWidth
                                                    value={nombre}
                                                    sx={{
                                                        "& .MuiInputLabel-root": {
                                                            color: "black",
                                                        },
                                                    }}
                                                    variant="filled"
                                                    onChange={(e) => setNombre(e.target.value)}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    label="Apellido"
                                                    fullWidth
                                                    value={apellido}
                                                    sx={{
                                                        "& .MuiInputLabel-root": {
                                                            color: "black",
                                                        },
                                                    }}
                                                    variant="filled"
                                                    onChange={(e) => setApellido(e.target.value)}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    label="Código"
                                                    fullWidth
                                                    value={codigo}
                                                    sx={{
                                                        "& .MuiInputLabel-root": {
                                                            color: "black",
                                                        },
                                                    }}
                                                    variant="filled"
                                                    onChange={(e) => setCodigo(e.target.value)}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    label="Cantidad"
                                                    fullWidth
                                                    value={cantidad}
                                                    sx={{
                                                        "& .MuiInputLabel-root": {
                                                            color: "black",
                                                        },
                                                    }}
                                                    variant="filled"
                                                    onChange={(e) => setCantidad(e.target.value)}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Button
                                                    variant="contained"
                                                    fullWidth
                                                    onClick={handleReservar}
                                                    color="warning"
                                                >
                                                    Reservar
                                                </Button>
                                            </Grid>
                                            {error && (
                                                <Grid item xs={12}>
                                                    <Alert
                                                        icon={<ErrorOutlineIcon fontSize="inherit"/>}
                                                        severity="warning"
                                                        onClose={() => {
                                                            setError(false);
                                                        }}
                                                    >
                                                        Datos invalidos, porfavor reingrese datos validos
                                                    </Alert>{" "}
                                                </Grid>
                                            )}
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid sx={{display: {xs: "none", sm: "block"}}} item xs={5}>
                                <Card variant="outlined">
                                    <CardMedia
                                        component="img"
                                        image={infoFuncion.thumbnail}
                                    />
                                </Card>
                            </Grid>
                        </Grid>
                    </Container>
                </Container>
                }
            </PageLayout>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Reserva confirmada</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Box
                            sx={{
                                backgroundColor: "#fff9f6",
                                border: "2px dotted #fc823b",
                                color: "#fa7525",
                                px: {xs: 1, sm: 6},
                                py: 1,
                                borderRadius: "5px",
                            }}
                        >
                            <Typography>{nombre}</Typography>
                            <Typography>{apellido}</Typography>
                            <Typography>{codigo}</Typography>
                            <Typography>{cantidad} pases</Typography>
                        </Box>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Entendido
                    </Button>
                </DialogActions>
            </Dialog>
        <Backdrop
            sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
            open={loading}
        >
            <CircularProgress color="inherit"/>
        </Backdrop>
    </>
}

export default ReservaPage
