import {
  Container,
  Typography,
  Grid,
  Button,
  TextField,
  Divider,
  Link,
  Box,
} from "@mui/material";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import PageLayout from "../components/PageLayout";
import Alert from "@mui/material/Alert";
import { useLocation } from "react-router-dom";

const ReservaPage = () => {

  const user = localStorage.getItem("user");
  const userJSON = JSON.parse(user);

  const [nombre, setNombre] = useState(userJSON ? userJSON.nombre : "");
  const [apellido, setApellido] = useState(userJSON ? userJSON.apellido : "");
  const [codigo, setCodigo] = useState(userJSON ? userJSON.correo : "");
  const [cantidad, setCantidad] = useState("");
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);

  const location= useLocation();
  const datos=location.state.datos;

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleReservar = () => {
    const email = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if (
      nombre.trim().length !== 0 &&
      apellido.trim().length !== 0 &&
      codigo.trim().length !== 0 &&
      cantidad.trim().length !== 0 &&
      !isNaN(cantidad) &&
      parseInt(cantidad) > 0 &&
      email.test(codigo.trim())
    ) {
      handleOpen();
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <>
      <PageLayout>
        <Container>
          <Typography variant="h4">Reserva</Typography>
          <Divider sx={{borderBottomWidth: 2, borderColor: "gray"}}/>
          <Container>
            <Container sx={{mt: 5}}>
              <Typography variant="h4">{datos.pelicula.title}</Typography>
              <Typography variant="subtitle1" color="gray" sx={{mb: 2}}>
                <LocationOnIcon sx={{mr: 2}}/>
                <Link href="#" underline="none">
                  Tiempo
                </Link>
                <LocationOnIcon sx={{mx: 2}}/>
                <Link href="#" underline="none">
                  {datos.sala}
                </Link>
              </Typography>
            </Container>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="h6">Información de reserva</Typography>
                    <Typography variant="subtitle1">
                      {datos.horario}
                    </Typography>
                    <Divider
                        sx={{borderBottomWidth: 2, borderColor: "gray"}}
                    />
                    <Grid container rowSpacing={2} sx={{mt: 1}}>
                      <Grid item xs={12}>
                        <TextField
                            label="Nombre"
                            fullWidth
                            value={nombre}
                            sx={{
                              "& .MuiInputLabel-root": {
                                color: "black",
                              },
                            }}
                            variant="filled"
                            onChange={(e) => setNombre(e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                            label="Apellido"
                            fullWidth
                            value={apellido}
                            sx={{
                              "& .MuiInputLabel-root": {
                                color: "black",
                              },
                            }}
                            variant="filled"
                            onChange={(e) => setApellido(e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                            label="Código"
                            fullWidth
                            value={codigo}
                            sx={{
                              "& .MuiInputLabel-root": {
                                color: "black",
                              },
                            }}
                            variant="filled"
                            onChange={(e) => setCodigo(e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                            label="Cantidad"
                            fullWidth
                            value={cantidad}
                            sx={{
                              "& .MuiInputLabel-root": {
                                color: "black",
                              },
                            }}
                            variant="filled"
                            onChange={(e) => setCantidad(e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                            variant="contained"
                            fullWidth
                            onClick={handleReservar}
                            color="warning"
                        >
                          Reservar
                        </Button>
                      </Grid>
                      {error && (
                          <Grid item xs={12}>
                            <Alert
                                severity="warning"
                                onClose={() => {
                                  setError(false);
                                }}
                            >
                              Datos invalidos, porfavor reingrese datos validos
                            </Alert>{" "}
                          </Grid>
                      )}
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card variant="outlined">
                  <CardMedia
                      component="img"
                      image={datos.pelicula.thumbnail}
                  />
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Container>
      </PageLayout>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Reserva confirmada</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Box
              sx={{
                backgroundColor: "#fff9f6",
                border: "2px dotted #fc823b",
                color: "#fa7525",
                px: 6,
                py: 1,
                borderRadius: "5px",
                width: "400px",
              }}
            >
              <Typography>{nombre}</Typography>
              <Typography>{apellido}</Typography>
              <Typography>{codigo}</Typography>
              <Typography>{cantidad} pases</Typography>
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Entendido
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ReservaPage;
