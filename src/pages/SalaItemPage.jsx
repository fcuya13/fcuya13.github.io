import { Container, Box, Grid, Typography, Link, Card, CardMedia, CardContent } from "@mui/material"
import DrawerBar from "../components/DrawerBar"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { CardHeader } from "react-bootstrap";

const SalaItemPage = () => {
  return <Box>
    <DrawerBar />
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
        }}>Salas</h2>
            <Container sx={{ mt: 5 }}>
                            <Typography variant="h4">
                                SALA A 
                            </Typography>
                            <Typography variant='subtitle1' color="gray" sx={{ mb: 2 }}>
                                <LocationOnIcon sx={{ mr: 2 }}/>
                                <Link href="#" underline="none">Pabellón X - ULima</Link>
                            </Typography>
            </Container>
        <Grid container spacing={2}>
        <Grid item xs = {8}>
            <Card variant="outlined">
                <CardMedia
                    component="img"
                    image="https://placehold.co/600x400"
                />
            </Card>
        </Grid> 
        <Grid item xs = {4}>
            <Card variant="outlined">
                <CardHeader>
                    <Typography variant="h5" sx={{ padding: 2 }}>
                        Historia
                    </Typography>
                </CardHeader>
                <CardContent>
                    <Typography variant="body1">
                    La Facultad de Comunicación tiene tres estudios, los cuales son sets profesionales que se utilizan para televisión, streaming y diversas realizaciones audiovisuales. Cada uno de ellos está equipado con tres cámaras de video digitales full HD, switcher digital, pantallas de monitoreo tanto en Control y Estudio, dos tituladores y grabadoras/reproductoras de video. El sonido comprende: consola de audio, micrófonos de mano, de pecho, boom y de vincha. El sistema de iluminación trabaja con control de iluminación, luces alógenas de varios tipos: Fresnel, Scoop, Broad, Cañón, además del rack de control técnico con instrumentos de medición.
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
        </Grid>
        <Grid>
            <Grid item xs = {6}>
                <Typography variant="h4" sx={{ mt: 2}}>
                    Películas disponibles
                </Typography>
            </Grid>
        </Grid>
      </Container> 
    </Grid>
  </Box>
}

export default SalaItemPage;