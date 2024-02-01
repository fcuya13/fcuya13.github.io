import { Container, Grid, Typography, Card, CardMedia, CardContent } from "@mui/material"
import PageLayout from "../components/PageLayout"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { CardHeader } from "react-bootstrap";
import ListaDisponibles from "../components/ListaDisponibles";
import { useLocation } from "react-router-dom";

const SalaItemPage=()=>{

    const location= useLocation()
    const sala=location.state.sala

    const listaSalas=[
        {
            siglas: "BS",
            name: "Beekeper Sentencia de Muerte",
            descripcionDisponible: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            available_times: ["15:00","17:00"]
        },
        {
            siglas: "NG",
            name: "El Niño y la Garza",
            descripcionDisponible: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            available_times: ["16:00","18:00"]
        },
        {
            siglas: "JC",
            name: "Jack en la Caja Maldita 3",
            descripcionDisponible: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            available_times: ["20:00","22:00"]
        }
    ]

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
        }}>Salas</h2>
            <Container sx={{ mt: 5 }}>
                            <Typography variant="h4">
                                {sala.name}
                            </Typography>
                            <box>
                                <Typography variant='subtitle1' color="gray" sx={{ mb: 2,  display:'inline-flex'}}>
                                    <LocationOnIcon sx={{ mr: 2 }}/>
                                    <Typography color="#009CD2">{sala.address}</Typography>
                                </Typography>
                            </box>
            </Container>
        <Grid container spacing={2}>
            <Grid item sm = {8} sx={{height: "100%"}}>
                <Card variant="outlined">
                    <CardMedia
                        component="img"
                        image={sala.image}
                    />
                </Card>
            </Grid> 
            <Grid item sm = {4} minWidth="10rem">
                <Card sx={{height: "100%"}}>
                    <CardHeader>
                        <Typography variant="h5" sx={{ padding: 2, pb:{xs:'0rem'}}}>
                            Historia
                        </Typography>
                    </CardHeader>
                    <CardContent>
                        <Typography variant="body1" color="text.secondary" sx={{ fontSize: { xs: '1em', sm: '0.8em', md:'1em' } }}>
                        La Facultad de Comunicación tiene tres estudios, los cuales son sets profesionales que se utilizan para televisión, streaming y diversas realizaciones audiovisuales. Cada uno de ellos está equipado con tres cámaras de video digitales full HD, switcher digital, pantallas de monitoreo tanto en Control y Estudio, dos tituladores y grabadoras/reproductoras de video. El sonido comprende: consola de audio, micrófonos de mano, de pecho, boom y de vincha. El sistema de iluminación trabaja con control de iluminación, luces alógenas de varios tipos: Fresnel, Scoop, Broad, Cañón, además del rack de control técnico con instrumentos de medición.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
        <Grid item xs = {12} sx={{mt:4, mb:5}}>
            <Typography variant="h4" sx={{ mt: 2}}>
                    Películas disponibles
            </Typography>
            <Container sx={{mt: 4}}>
                <ListaDisponibles
                    listaDisponibles={listaSalas}>
                </ListaDisponibles>
            </Container>
        </Grid>
      </Container> 
    </Grid>
    </PageLayout>
  )
}

export default SalaItemPage