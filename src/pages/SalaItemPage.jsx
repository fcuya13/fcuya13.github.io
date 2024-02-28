import {Container, Grid, Typography, Card, CardMedia, CardContent} from "@mui/material"
import PageLayout from "../components/PageLayout"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {CardHeader} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import ListaDisponibles2 from "../components/ListaDisponibles2";
import {Helmet} from "react-helmet";

const SalaItemPage = () => {
    const [peliculasData, setPeliculasData] = useState([]);
    const {path} = useParams();
    const [sala, setSalas] = useState(null);


    const cargarData = async () => {
        const responseSala = await fetch(`http://localhost:8000/cineulima/salas?filtro=${path}`);
        const dataSala = await responseSala.json();
        setSalas(dataSala)
    };

    useEffect(() => {
        cargarData();
    }, []);

    const cargarDataPelicula = async () => {
        const responsePelicula = await fetch(`http://localhost:8000/cineulima/salainfofecha?fecha=2024-03-01&salaid=${sala.id}`);
        const dataPeliculas = await responsePelicula.json();
        setPeliculasData(dataPeliculas)
    };

    useEffect(() => {
        if(sala){
            cargarDataPelicula();
        }
    }, [sala]);

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
                        {peliculasData && <Grid item xs={12} sx={{mt: 4, mb: 5}}>
                            <Typography variant="h4" sx={{mt: 2}}>
                                Películas disponibles
                            </Typography>
                            <Container sx={{mt: 4}}>
                                <ListaDisponibles2
                                    listaDisponibles={peliculasData}
                                    sala={sala}
                                >
                                </ListaDisponibles2>
                            </Container>
                    </Grid>}
                    </>
                    }
                </Container>
            </Grid>
        </PageLayout>
    </>
}

export default SalaItemPage