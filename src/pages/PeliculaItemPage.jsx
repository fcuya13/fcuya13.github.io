import { Container, Box, Grid, Typography, Chip, Card, CardMedia, CardContent } from "@mui/material"
import PageLayout from "../components/PageLayout"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { CardHeader } from "react-bootstrap";
import ListaDisponibles from "../components/ListaDisponibles";

const PeliculaItemPage=()=>{
    const listaSalas=[
        {
            avatarTitulo: "S1",
            nombreDisponible: "Sala A",
            descripcionDisponible: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            horario1: "15:00",
            horario2: "17:00"
        },
        {
            avatarTitulo: "S2",
            nombreDisponible: "Sala B",
            descripcionDisponible: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            horario1: "16:00",
            horario2: "18:00"
        },
        {
            avatarTitulo: "S3",
            nombreDisponible: "Sala C",
            descripcionDisponible: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            horario1: "20:00",
            horario2: "22:00"
        }
    ]

    return (
    <PageLayout>
    <Grid
      container
      style={{ marginTop: '20px', fontFamily: 'Roboto, sans-serif' }}>
      <Container>
        <h2 style={{
          borderBottom: '1px solid #0000001F',
          marginTop: '30px',
          marginBottom: '5%',
          fontSize: '34px',
          fontWeight: 400,
          letterSpacing: 0.25
        }}>Películas</h2>
            <Container sx={{ mt: 5 }}>
                            <Typography variant="h4">
                                Beekeper Sentencia de Muerte
                            </Typography>
                            <box>
                                <Typography variant='subtitle1' color="gray" sx={{ mb: 2,  display:'inline-flex'}}>
                                    <LocationOnIcon sx={{ mr: 2 }}/>
                                    <Typography color="#009CD2">1 hrs 50min</Typography>
                                </Typography>
                                <Typography variant='subtitle1' color="gray" sx={{ mb: 2, ml:2 , display: 'inline-flex' }}>
                                    <LocationOnIcon sx={{ mr: 2 }}/>
                                    <Typography color="#009CD2">Director</Typography>
                                </Typography>
                            </box>
            </Container>
        <Grid container spacing={2}>
            <Grid item sm = {8} sx={{height: "100%"}}>
                <Card variant="outlined">
                    <CardMedia
                        component="img"
                        image="https://placehold.co/540x280"
                    />
                </Card>
            </Grid> 
            <Grid item sm = {4} minWidth="10rem">
                <Card variant="outlined" sx={{height: "100%"}}>
                    <CardHeader>
                        <Typography variant="h5" sx={{ padding: 2, pb:{xs:'0rem'}}}>
                            Sinopsis
                        </Typography>
                    </CardHeader>
                    <CardContent>
                        <Typography variant="body1" sx={{ fontSize: { xs: '1em', sm: '0.8em', md:'1em' } }}>
                        La brutal campaña de venganza de un hombre adquiere dimensiones nacionales cuando se descubre que es un antiguo agente de una poderosa organización clandestina conocida como "Los apicultores".
                        </Typography>
                    </CardContent>
                    <Box sx={{m: 1, mt:0 }}>
                        <Chip sx={{ml:1,}} label="Acción" />
                        <Chip sx={{ml:1}} label="+14" />
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
                    listaDisponibles={listaSalas}>
                </ListaDisponibles>
            </Container>
        </Grid>
      </Container> 
    </Grid>
    </PageLayout>
  )
}

export default PeliculaItemPage