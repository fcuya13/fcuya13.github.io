import { Container, TextField, Button, Typography, alpha } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");


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
      <Container sx={{ width: "80%",
          maxWidth: "500px",
          marginBottom: 5,
          '@media (min-width:600px)': {
            width: "40%",
          },
          backgroundColor: "white",
          p: "20px",
          borderRadius: 2, }}>
        <form
          sx={{
            background: "white",
            borderRadius: 1,
          }}
        >
          <TextField
            label="Usuario"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: 3 }}
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
          <TextField
            label="Contraseña"
            variant="outlined"
            fullWidth
            type="password"
            sx={{ marginBottom: 3 }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            color="warning"
            fullWidth
            sx={{
              marginTop: 2,
              fontSize: 15,
              fontWeight: 500,
              letterSpacing: 0.46,
              backgroundColor: "#FA7525",
            }}
            component={Link}
            to={"/"}
          >
            INGRESAR
          </Button>
          <Button
            variant="outlined"
            color="warning"
            fullWidth
            sx={{
              marginTop: 2,
              fontSize: 15,
              fontWeight: 500,
              letterSpacing: 0.46,
              backgroundColor: "#fff",
            }}
            component={Link}
            to={"/registro"}
          >
            REGISTRARSE
          </Button>
        </form>
      </Container>
    </Container>
  );
};

export default LoginPage;
