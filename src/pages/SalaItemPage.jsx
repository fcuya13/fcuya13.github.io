import { Container, Box, Grid, Typography, Link, Card, CardMedia, CardContent, CardActions, Button } from "@mui/material"
import PageLayout from "../components/PageLayout"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { CardHeader } from "react-bootstrap";


const SalaItemPage = () => {
    
    const buttonStyle = {
        width: '80px',
        height: '28px',
        padding: '4px 24px',
        borderRadius: '4px',
        border: '1px dashed #9747FF',
        background: 'rgba(151, 71, 255, 0.04)',
        color: '#9747FF',
    };
    
    const cardStyle = {
        marginTop: '24px',
    };

return (
    <PageLayout>
    <Grid
      container
      style={{ fontFamily: 'Roboto, sans-serif' }}>
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
            <Card>
                <CardMedia
                    component="img"
                    image="https://placehold.co/600x400"
                />
            </Card>
        </Grid> 
        <Grid item xs = {4}>
            <Card>
                <CardHeader>
                    <Typography variant="h5" sx={{ padding: 2 }}>
                        Historia
                    </Typography>
                </CardHeader>
                <CardContent>
                    <Typography variant="body1" color="text.secondary">
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
        <Container>
        <Grid>
            <Grid item xs = {8}>
            <Card elevation={0} style={cardStyle}>
                <CardHeader>
                    <Stack direction="row" spacing={2} sx={{ml: 2, mt: 2}}>
                        <><Avatar variant="rounded" sx={{background: '#BDBDBD'}}>BS</Avatar></>
                        <><Typography variant='h6' color="text.primary">Beekeper Sentencia de Muerte</Typography></>
                    </Stack>
                </CardHeader>
                <CardContent>
                    <Typography variant="body1" color="text.secondary">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </Typography>
                </CardContent>   
                <CardActions>
                    <Button 
                    variant="outlined"
                    style={buttonStyle}
                >15:00</Button>
                    <Button 
                    variant="outlined"
                    style={buttonStyle}
                    >17:00</Button>
                </CardActions>
            </Card>
            <Card elevation={0} style={cardStyle}>
                <CardHeader>
                    <Stack direction="row" spacing={2} sx={{ml: 2, mt: 2}}>
                        <><Avatar variant="rounded" sx={{background: '#BDBDBD'}}>NG</Avatar></>
                        <><Typography variant='h6' color="text.primary">El Niño y la Garza</Typography></>
                    </Stack>
                </CardHeader>
                <CardContent>
                    <Typography variant="body1" color="text.secondary">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </Typography>
                </CardContent>   
                <CardActions>
                    <Button 
                    variant="outlined"
                    style={buttonStyle}
                    >16:00</Button>
                    <Button 
                    variant="outlined"
                    style={buttonStyle}
                    >18:00</Button>
                </CardActions>
            </Card>
            <Card elevation={0} style={cardStyle}>
                <CardHeader>
                    <Stack direction="row" spacing={2} sx={{ml: 2, mt: 2}}>
                        <><Avatar variant="rounded" sx={{background: '#BDBDBD'}}>JC</Avatar></>
                        <><Typography variant='h6' color="text.primary">Jack en la Caja Maldita 3</Typography></>
                    </Stack>
                </CardHeader>
                <CardContent>
                    <Typography variant="body1" color="text.secondary">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </Typography>
                </CardContent>   
                <CardActions>
                    <Button 
                    variant="outlined"
                    style={buttonStyle}
                    >20:00</Button>
                    <Button 
                    variant="outlined"
                    style={buttonStyle}
                    >22:00</Button>
                </CardActions>
            </Card>
            </Grid>
        </Grid>
        </Container>
      </Container> 
      </Grid>
      </PageLayout>
)
}

export default SalaItemPage;