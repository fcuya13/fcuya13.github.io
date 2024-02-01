import { Container, TextField, Button, Typography, alpha } from "@mui/material";
import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check"

const LoginPage = () => {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [usuarios, setUsuarios] = useState([]);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const obtenerUsuarios = async () => {
      const response = await fetch ("/users.json");
      const data = await response.json()
      setUsuarios(data)
  }

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user){
          navigate("/home");
        }
        obtenerUsuarios()
    }, []);
  const validateUserPassword = () => {

      const listaFiltrada = usuarios.filter((usuario) => {
          return usuario.correo === correo && usuario.password === password;
      })

      if (listaFiltrada.length > 0){
          const us = listaFiltrada[0]
          const data = JSON.stringify(us);
          navigate("/home")
          localStorage.setItem("user", data);
      }
      else{
          setError(true)
      }
  }


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
          style={{
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
            sx={{ marginBottom: 1 }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Typography component={Link} to="/recupera" color="#FA7525" 
          sx={{ 
                fontSize : '15px'}}>
            Olvide mi contraseña
          </Typography>
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
            onClick={validateUserPassword}
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

        {error && (
            <Alert
                icon={<CheckIcon fontSize="inherit" />}
                severity="error"
                sx={ { mt : 2 } }>
                Credenciales incorrectas. Inténtelo nuevamente
            </Alert>
        )}
    </Container>
  );
};

export default LoginPage;
