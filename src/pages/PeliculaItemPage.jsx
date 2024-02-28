import { Container, Box, Grid, Typography, Chip, Alert, Card, CardMedia, CardContent } from "@mui/material"
import PageLayout from "../components/PageLayout"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { CardHeader } from "react-bootstrap";
import ListaDisponibles from "../components/ListaDisponibles";
import {useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const PeliculaItemPage=()=>{
    const [salasData, setSalasData] = useState([]);
    const [peliculasData, setPeliculasData] = useState([]);
    const [fechasHorariosData, setFechasHorariosData]=useState([]);
    const { path } = useParams();
    const [pelicula, setPelicula] = useState(null);
    const [fechaFiltro, setFechaFiltro]=useState("");
    const [horaFiltro, setHoraFiltro]=useState("");
    const [noEncontrado, setNoEncontrado]=useState(false)

    const cargarData = async () => {
        const responsePelis = await fetch(`http://localhost:8000/cineulima/peliculas/${path}`);
        const dataPeli = await responsePelis.json();
        setPeliculasData(dataPeli);
    };
    
    const obtenerInfoSalas=async (idPelicula)=>{
        const responseSalas= await fetch(`http://localhost:8000/cineulima/ventanas-peliculas?id=${idPelicula}&fecha=${fechaFiltro}&hora=${horaFiltro}`);
        const dataSalas= await responseSalas.json();
        setSalasData(dataSalas);
        if(dataSalas.length===0){
            setNoEncontrado(true);
        }else{
            setNoEncontrado(false);
        }
    }

    const fechasHorarios=async ()=>{
        const response= await fetch(`http://localhost:8000/cineulima/fechas-horarios`);
        const data= await response.json();
        setFechasHorariosData(data);
    }
    
    useEffect(() => {
        cargarData();
        fechasHorarios();
    }, []);

    useEffect(() => {
        if (peliculasData.length > 0) {
            const peliLoaded = peliculasData.find(p => p.path === path);
            setPelicula(peliLoaded);
            if (peliLoaded && peliLoaded.id) {
                obtenerInfoSalas(peliLoaded.id);
            }
        }
    }, [peliculasData, path]);

    useEffect(() => {
        if (pelicula && pelicula.id) {
          obtenerInfoSalas(pelicula.id);
        }
      }, [fechaFiltro, horaFiltro, pelicula]);

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
        { pelicula && <>
            <Container sx={{ mt: 5 }}>
                            <Typography variant="h4" sx={{mb:2}}>
                                {pelicula.titulo}
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
                                        <LocationOnIcon/>
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
            <Grid container spacing={2} sx={{mt:2, width:'100%'}}>
                <Grid item xs={12} sm={5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: "100%" }}>
                    <Card variant="outlined" sx={{width:'100%'}}>
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
        {salasData && <Grid item xs = {12} sx={{mt:4, mb:5}}>
            <Typography variant="h4" sx={{ mt: 2}}>
                    Salas disponibles
            </Typography>
            <Box>
                <FormControl variant="standard" sx={{ m: 1, mt:4, minWidth: "9em"}}>
                    <InputLabel>Fecha</InputLabel>
                    <Select
                        value={fechaFiltro}
                        onChange={(e) => setFechaFiltro(e.target.value)}
                        label="Age">
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {fechasHorariosData.fechas.map((fecha) => {
                            return <MenuItem value={fecha}>
                                {fecha}
                            </MenuItem>
                        })
                        }
                    </Select>
                </FormControl>
                <FormControl variant="standard" sx={{ m: 1, mt:4, minWidth: "7em"}}>
                    <InputLabel>Horario</InputLabel>
                    <Select
                        value={horaFiltro}
                        onChange={(e) => setHoraFiltro(e.target.value)}
                        label="Age">
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {fechasHorariosData.horas.map((hora) => {
                            return <MenuItem value={hora}>
                                {hora}
                            </MenuItem>
                        })
                        }
                    </Select>
                </FormControl>
            </Box>
            
            <Container sx={{mt: 4}}>
                <ListaDisponibles
                    listaDisponibles={salasData}
                    pelicula={pelicula}>
                </ListaDisponibles>
                
            </Container>
            </Grid> }
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
        </>
        }
      </Container> 
    </Grid>
    </PageLayout>
    
  )
}

export default PeliculaItemPage