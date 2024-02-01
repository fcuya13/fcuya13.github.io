import { Container, Box, Grid, Typography, Chip, Card, CardMedia, CardContent } from "@mui/material"
import PageLayout from "../components/PageLayout"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { CardHeader } from "react-bootstrap";
import ListaDisponibles from "../components/ListaDisponibles";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const PeliculaItemPage=()=>{
    const [salasData, setSalasData] = useState([])
    const location= useLocation()
    const pelicula=location.state.pelicula

    const obtenerSalas = async () => {
        const response = await fetch("/salas.json")
        const data = await response.json()
        setSalasData(data)
    }

    useEffect(() => {
        obtenerSalas()
    }, [])

    const filtrarSalas = (nombres, salas) => {
        return salas.filter(sala => nombres.includes(sala.name));
    }

    const listaSalas=filtrarSalas(pelicula.salas, salasData)

    console.log(listaSalas)

    return (
    <PageLayout>
    <Grid
      container
      style={{ fontFamily: 'Roboto, sans-serif' }}>
      <Container>
        <h2 style={{
          borderBottom: '1px solid #0000001F',
          marginBottom: '5%',
          marginTop: "25px",
          fontSize: '34px',
          fontWeight: 400,
          letterSpacing: 0.25
        }}>Películas</h2>
            <Container sx={{ mt: 5 }}>
                            <Typography variant="h4" sx={{mb:2}}>
                                {pelicula.title}
                            </Typography>
                            <box>
                                <Typography variant='subtitle1' color="gray" sx={{ mb: 2,  display:'inline-flex'}}>
                                    <LocationOnIcon sx={{ mr: 2 }}/>
                                    <Typography color="#009CD2">{pelicula.year}</Typography>
                                </Typography>
                                <Box sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    alignItems: 'center'}}>
                                    <Typography variant='subtitle1' color="gray" sx={{ display:'inline-flex'}}>
                                        <LocationOnIcon sx={{ mr: 2 }}/>
                                    </Typography>
                                    {pelicula.cast.map(label => {
                                        return <Typography 
                                            variant='subtitle1' 
                                            color="#009CD2" 
                                            sx={{ ml:1 , display: 'inline-flex' }}>
                                            {label} •
                                        </Typography>
                                    })}
                                </Box>
                            </box>
            </Container>
        <Grid container spacing={2} sx={{mt:2}}>
            <Grid item sm = {5} sx={{height: "100%"}}>
                <Card variant="outlined">
                    <CardMedia
                        component="img"
                        image={pelicula.thumbnail}
                    />
                </Card>
            </Grid> 
            <Grid item sm = {7} minWidth="10rem">
                <Card variant="outlined" sx={{height: "100%"}}>
                    <CardHeader>
                        <Typography variant="h5" sx={{ padding: 2, pb:{xs:'0rem'}}}>
                            Sinopsis
                        </Typography>
                    </CardHeader>
                    <CardContent>
                        <Typography variant="body1" color="text.secondary" sx={{ fontSize: { xs: '1em', sm: '0.8em', md:'1em' } }}>
                        {pelicula.extract}
                        </Typography>
                    </CardContent>
                    
                    <Box sx={{m: 1, mt:0 }}>
                        {pelicula.genres.map(label => {
                            return <Chip
                                label={label}
                                sx={{ml:1}} />
                        })}
                    </Box>
                </Card>
            </Grid>
        </Grid>
        <Grid item xs = {12} sx={{mt:4, mb:5}}>
            <Typography variant="h4" sx={{ mt: 2}}>
                    Salas disponibles
            </Typography>
            <Container sx={{mt: 4}}>
                <ListaDisponibles
                    listaDisponibles={listaSalas}
                    pelicula={pelicula}>
                </ListaDisponibles>
            </Container>
        </Grid>
      </Container> 
    </Grid>
    </PageLayout>
  )
}

export default PeliculaItemPage