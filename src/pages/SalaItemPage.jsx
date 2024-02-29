import {
    Container,
    Grid,
    Typography,
    Card,
    CardMedia,
    CardContent,
    Box,
    Alert,
    CircularProgress,
    Backdrop
} from "@mui/material"
import PageLayout from "../components/PageLayout"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {CardHeader} from "react-bootstrap";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import ListaDisponibles2 from "../components/ListaDisponibles2";
import {Helmet} from "react-helmet";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const SalaItemPage = () => {
    const [peliculasData, setPeliculasData] = useState([]);
    const {path} = useParams();
    const [sala, setSalas] = useState(null);
    const [fechaFiltro, setFechaFiltro]=useState("");
    const [fechasHorariosData, setFechasHorariosData]=useState([]);
    const [noEncontrado, setNoEncontrado]=useState(false)
    const [loading, setLoading] = useState(false)
    const [loadingPelis, setLoadingPelis] = useState(false)
    const navigate = useNavigate()

    const cargarData = async () => {
        setLoading(true)
        const responseSala = await fetch(`https://cineulima.azurewebsites.net/cineulima/sala?filtro=${path}`)
        const fechasResponse = await fetch("https://cineulima.azurewebsites.net/cineulima/fechas")
        const dataSala = await responseSala.json();
        setSalas(dataSala)
        const dataFechas = await fechasResponse.json();
        setFechasHorariosData(dataFechas)
        setFechaFiltro(dataFechas[0].value)
        setLoading(false)
    }

    useEffect(() => {
        cargarData()
    }, [])

    const cargarDataPelicula = async () => {
        setLoadingPelis(true)
        setPeliculasData([])
        const responsePelicula = await fetch(`https://cineulima.azurewebsites.net/cineulima/salainfofecha?fecha=${fechaFiltro}&salaid=${sala.id}`)
        const dataPeliculas = await responsePelicula.json()
        setPeliculasData(dataPeliculas)
        if(dataPeliculas.length===0){
            setNoEncontrado(true)
        }
        else{
            setNoEncontrado(false)
        }
        setLoadingPelis(false)
    }

    useEffect(() => {

        if(sala){
            cargarDataPelicula()
        }
    }, [sala, fechaFiltro])

    return <>
        <Helmet>
            <title>Vive la mejor experiencia en los mejores cines | Cine Ulima</title>
        </Helmet>
        <PageLayout>
            <Grid
                container
                style={{fontFamily: 'Roboto, sans-serif'}}>
                <Container>
                    <h2 style={{
                        borderBottom: '1px solid #0000001F',
                        marginBottom: '5%',
                        marginTop: "25px",
                        fontSize: '34px',
                        fontWeight: 400,
                        letterSpacing: 0.25
                    }}>Salas</h2>
                    {sala && <>
                        <Container sx={{mt: 5}}>
                            <Typography variant="h4" sx={{mb: 2}}>
                                {sala.nombre}
                            </Typography>
                            <box>
                                <Typography variant='subtitle1' color="gray" sx={{mb: 2, display: 'inline-flex'}}>
                                    <LocationOnIcon sx={{mr: 2}}/>
                                    <Typography color="#009CD2">{sala.direccion}</Typography>
                                </Typography>
                            </box>
                        </Container>
                        <Grid container spacing={2}>
                            <Grid item sm={8} sx={{height: "100%"}}>
                                <Card variant="outlined">
                                    <CardMedia
                                        component="img"
                                        image={sala.imagen}
                                    />
                                </Card>
                            </Grid>
                            <Grid item sm={4} minWidth="10rem">
                                <Card variant="outlined" sx={{height: "100%"}}>
                                    <CardHeader>
                                        <Typography variant="h5" sx={{padding: 2, pb: {xs: '0rem'}}}>
                                            Historia
                                        </Typography>
                                    </CardHeader>
                                    <CardContent>
                                        <Typography variant="body1" color="text.secondary"
                                                    sx={{fontSize: {xs: '1em', sm: '0.8em', md: '1em'}}}>
                                            La Facultad de Comunicación tiene tres estudios, los cuales son sets
                                            profesionales que se utilizan para televisión, streaming y diversas
                                            realizaciones audiovisuales. Cada uno de ellos está equipado con tres
                                            cámaras de video digitales full HD, switcher digital, pantallas de monitoreo
                                            tanto en Control y Estudio, dos tituladores y grabadoras/reproductoras de
                                            video. El sonido comprende: consola de audio, micrófonos de mano, de pecho,
                                            boom y de vincha. El sistema de iluminación trabaja con control de
                                            iluminación, luces alógenas de varios tipos: Fresnel, Scoop, Broad, Cañón,
                                            además del rack de control técnico con instrumentos de medición.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                        <Box>
                            <FormControl variant="standard" sx={{ m: 1, mt:4, minWidth: "9em"}}>
                                <InputLabel>Fecha</InputLabel>
                                <Select
                                    value={fechaFiltro}
                                    onChange={(e) => setFechaFiltro(e.target.value)}
                                    label="fecha">
                                    {fechasHorariosData.map((fecha) => {
                                        return <MenuItem value={fecha.value}>
                                            {fecha.display}
                                        </MenuItem>
                                    })
                                    }
                                </Select>
                            </FormControl>
                        </Box>

                        {peliculasData && <Grid item xs={12} sx={{mt: 4, mb: 5}}>
                            <Typography variant="h4" sx={{mt: 2}}>
                                Películas disponibles
                            </Typography>
                            <Container sx={{mt: 4}}>
                                {loadingPelis && <CircularProgress color="inherit"/>}
                                <ListaDisponibles2
                                    listaDisponibles={peliculasData}
                                    sala={sala}
                                >
                                </ListaDisponibles2>
                            </Container>
                    </Grid>}
                    </>
                    }
                    {
                        (() => {
                            if (noEncontrado) {
                                return <Alert
                                    severity="error"
                                    sx={{ mt: 2, mb: 4 }}>
                                    No se encontraron resultados
                                </Alert>
                            }
                        })()
                    }
                </Container>
            </Grid>
            <Backdrop
                sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                open={loading}
            >
                <CircularProgress color="inherit"/>
            </Backdrop>
        </PageLayout>
    </>
}

export default SalaItemPage