import { Container, TextField, Button, Typography, alpha } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [passConf, setPassConf] = useState("");


  const imprimirValores = () => {
    console.log({
      nombre,
      apellido,
      correo,
      password,
      passConf,
      same: password === passConf,
    });
  };

  return (
    <Container maxWidth={false}
    sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: 'Roboto, sans-serif',
        backgroundColor: alpha("#FA7525", 0.3)
      }}
    >
      <Typography
        variant="h1"
        align="center"
        sx={{
          marginBottom: 5,
          color: "#000",
          fontFamily: "Sofija",
          fontSize: 96,
        }}
      >
        SALAS DE CINE ULIMA
      </Typography>
      <Container
        sx={{
          width: "80%",
          maxWidth: "550px",
          marginBottom: 5,
          '@media (min-width:600px)': {
            width: "40%",
          },
          backgroundColor: "white",
          p: "20px",
          borderRadius: 2,
        }}
      >
        <form
          sx={{
            background: "white",
            borderRadius: 1,
          }}
        >
          <div className="mb-3">
            <TextField
              label="Nombre"
              variant="outlined"
              fullWidth
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <TextField
              label="Apellidos"
              variant="outlined"
              fullWidth
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <TextField
              label="Correo"
              variant="outlined"
              fullWidth
              type="email"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <TextField
              label="Contraseña"
              variant="outlined"
              fullWidth
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <TextField
              label="Confirmar Contraseña"
              variant="outlined"
              fullWidth
              type="password"
              value={passConf}
              onChange={(e) => setPassConf(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2">
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                marginTop: 2,
                fontSize: 15,
                fontWeight: 500,
                letterSpacing: 0.46,
                backgroundColor: "#FA7525",
              }}
              onClick={imprimirValores}
              component={Link}
              to={"/peliculas"}
            >
              INGRESAR
            </Button>
          </div>
        </form>
      </Container>
    </Container>
  );
};

export default RegisterPage;
