import {Container, Grid, Typography, Card, CardMedia, CardContent} from "@mui/material"
import PageLayout from "../components/PageLayout"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {CardHeader} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import ListaDisponibles2 from "../components/ListaDisponibles2";

const SalaItemPage = () => {
    const [peliculasData, setPeliculasData] = useState([]);
    const [salasData, setSalasData] = useState([]);
    const {path} = useParams();
    const [sala, setSala] = useState(null);
    var listasFilt;


    const cargarData = async () => {
        const responseSalas = await fetch('/salas.json');
        const dataSalas = await responseSalas.json();
        const responsePelis = await fetch('/peliculas.json');
        const dataPelis = await responsePelis.json();
        setSalasData(dataSalas);
        setPeliculasData(dataPelis);
    };


    const filtrarPeliculas = (nombres, peliculas) => {
        return peliculas.filter((pelicula) => nombres.includes(pelicula.id));
    };

    useEffect(() => {
        cargarData();
    }, []);

    useEffect(() => {
        const salaLoaded = salasData.find((s) => s.path === path);
        setSala(salaLoaded);
    }, [path, salasData]);


    if (sala) {
        listasFilt = filtrarPeliculas(sala.peliculas, peliculasData)
    }

    return (
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
                                {sala.name}
                            </Typography>
                            <box>
                                <Typography variant='subtitle1' color="gray" sx={{mb: 2, display: 'inline-flex'}}>
                                    <LocationOnIcon sx={{mr: 2}}/>
                                    <Typography color="#009CD2">{sala.address}</Typography>
                                </Typography>
                            </box>
                        </Container>
                        <Grid container spacing={2}>
                            <Grid item sm={8} sx={{height: "100%"}}>
                                <Card variant="outlined">
                                    <CardMedia
                                        component="img"
                                        image={sala.image}
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
                        {listasFilt && <Grid item xs={12} sx={{mt: 4, mb: 5}}>
                            <Typography variant="h4" sx={{mt: 2}}>
                                Películas disponibles
                            </Typography>
                            <Container sx={{mt: 4}}>
                                <ListaDisponibles2
                                    listaDisponibles={listasFilt}
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
    )
}

export default SalaItemPage