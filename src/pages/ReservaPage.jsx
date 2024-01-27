import {Container,Typography,Grid,Button,TextField,Divider,Link} from '@mui/material';
import { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Topnav from '../comp/Topnav';
import LeftItem from '../comp/LeftItem';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';



const ReservaPage = () => {
    const [nombre, setNombre] = useState();
    const [apellido, setApellido] = useState();
    const [codigo, setCodigo] = useState();
    const [cantidad, setCantidad] = useState();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

  
    const handleReservar = () => {
      console.log(`Reservando para: ${nombre} ${apellido}`);
    };
  
    return (
    <div>
    <Topnav/>
        <Grid container>
            <Grid item xs={2}>
                <LeftItem/>
            </Grid>
            <Grid item xs={10} sx={{
                mt:5
            }}>
                <Container>
                    <Typography variant="h4">
                        Reserva
                    </Typography>
                    <Divider sx={{ borderBottomWidth: 2, borderColor: 'gray'}}/>
                    <Container>
                        <Container sx={{ mt: 5 }}>
                            <Typography variant="h4">
                                Titulo de Pelicula 
                            </Typography>
                            <Typography variant='subtitle1' color="gray" sx={{ mb: 2 }}>
                                <LocationOnIcon sx={{ mr: 2 }}/>
                                <Link href="#" underline="none">Tiempo</Link>
                                <LocationOnIcon sx={{ mx: 2 }}/> 
                                <Link href="#" underline="none">Sala N</Link>
                            </Typography>
                        </Container>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Card variant="outlined">
                                    <CardContent>
                                    <Typography variant="h6">
                                        Información de reserva
                                    </Typography>
                                    <Typography variant="subtitle1">    
                                        Lunes 08 - 15:00 hrs
                                    </Typography>
                                    <Divider sx={{ borderBottomWidth: 2, borderColor: 'gray'}}/>
                                        <Grid container rowSpacing={2} sx={{ mt: 1 }}>
                                            <Grid item xs={12}>
                                                <TextField
                                                    label="Nombre"
                                                    fullWidth
                                                    value={nombre}
                                                    sx={{
                                                        '& .MuiInputLabel-root': {
                                                        color: 'black',
                                                        },
                                                    }}
                                                    variant='filled'
                                                    onChange={(e) => setNombre(e.target.value)}
                                                    />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    label="Apellido"
                                                    fullWidth
                                                    value={apellido}
                                                    sx={{
                                                        '& .MuiInputLabel-root': {
                                                        color: 'black',
                                                        },
                                                    }}
                                                    variant='filled'
                                                    onChange={(e) => setApellido(e.target.value)}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    label="Código"
                                                    fullWidth
                                                    value={codigo}
                                                    sx={{
                                                        '& .MuiInputLabel-root': {
                                                        color: 'black',
                                                        },
                                                    }}
                                                    variant='filled'
                                                    onChange={(e) => setCodigo(e.target.value)}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    label="Cantidad"
                                                    fullWidth
                                                    value={cantidad}
                                                    sx={{
                                                        '& .MuiInputLabel-root': {
                                                        color: 'black',
                                                        },
                                                    }}
                                                    variant='filled'
                                                    onChange={(e) => setCantidad(e.target.value)}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Button
                                                    variant="contained"
                                                    fullWidth
                                                    onClick={handleOpen}
                                                    color='warning'
                                                    >Reservar
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs = {6}>
                                <Card variant="outlined">
                                    <CardMedia
                                        component="img"
                                        image="https://placehold.co/600x400"
                                    />
                                </Card>
                            </Grid>
                        </Grid>
                    </Container>   
                </Container>
            </Grid>
        </Grid>
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Reserva confirmada</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Container>
                <Typography>{nombre}</Typography>
                <Typography>{apellido}</Typography>
                <Typography>{codigo}</Typography>
                <Typography>{cantidad} pases</Typography>
            </Container>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Entendido
          </Button>
        </DialogActions>
      </Dialog>
    </div>
)}

export default ReservaPage;