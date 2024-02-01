import { Container, TextField, Button, Typography, alpha } from "@mui/material";
import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import Alert from "@mui/material/Alert";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const RegisterPage = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [passConf, setPassConf] = useState("");
  const [usuarios, setUsuarios] = useState([]);
  const [error, setError] = useState(false);
  const [existingUserError, setExistingUserError] = useState(false);
  const [passNotSame, setPassNotSame] = useState(false);
  const navigate = useNavigate();

    const obtenerUsuarios = async () => {
        const response = await fetch ("/users.json");
        const data = await response.json()
        setUsuarios(data)
    }

    useEffect(() => {
      const user = sessionStorage.getItem("user");
        if (user){
          navigate("/home");
        }
        obtenerUsuarios()
    }, [navigate]);

    const validarInputs = () => {
        const email = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        return nombre.trim().length !== 0 &&
            apellido.trim().length !== 0 &&
            correo.trim().length !== 0 &&
            email.test(correo.trim()) &&
            password.trim().length >= 8;
    };
  const validateRegisterForm = async () => {

      if (!validarInputs()){
          setError(true);
          return;
      }

      if (password !== passConf){
          setPassNotSame(true);
          return;
      }

      const existingUser = usuarios.filter((user) => {
          return user.correo === correo;
      })

      if (existingUser.length > 0){
          setExistingUserError(true)
      }
      else{
          const usuarioAgregar = {
              nombre, apellido, correo
          }

          const data = JSON.stringify(usuarioAgregar);
          sessionStorage.setItem("user", data)
          navigate("/home")
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
      <Container
        sx={{
          width: {xs:"80%", md: "40%"},
          marginBottom: 5,
          backgroundColor: "white",
          p: "20px",
          borderRadius: 2,
        }}
      >
        <form
          style={{
            background: "white",
            borderRadius: 1,
          }}
        >
            <TextField
              label="Nombre"
              variant="outlined"
              sx={{ marginBottom: 1 }}
              fullWidth
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            <TextField
              label="Apellidos"
              variant="outlined"
              sx={{ marginBottom: 1 }}
              fullWidth
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
            />

            <TextField
              label="Correo"
              variant="outlined"
              sx={{ marginBottom: 1 }}
              fullWidth
              type="email"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
            <TextField
              label="Contraseña"
              variant="outlined"
              fullWidth
              sx={{ marginBottom: 1 }}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              label="Confirmar Contraseña"
              variant="outlined"
              fullWidth
              sx={{ marginBottom: 1 }}
              type="password"
              value={passConf}
              onChange={(e) => setPassConf(e.target.value)}
            />
            <Button
              variant="contained"
              color="warning"
              fullWidth
              sx={{
                marginTop: 1,
                fontSize: 15,
                fontWeight: 500,
                letterSpacing: 0.46,
              }}
              onClick={validateRegisterForm}
            >
              INGRESAR
            </Button>
              <Button
                  variant="outlined"
                  color="warning"
                  fullWidth
                  sx={{
                      marginTop: 1,
                      fontSize: 15,
                      fontWeight: 500,
                      letterSpacing: 0.46,
                      backgroundColor: "#fff",
                  }}
                  component={Link}
                  to={"/login"}
              >
                  REGRESAR AL LOGIN
              </Button>
        </form>
          {error && (
              <Alert
                  icon={<ErrorOutlineIcon fontSize="inherit" />}
                  severity="error"
                  sx={ { mt : 2 } }
                  onClose={() => {
                      setError(false);
                  }}>
                  Complete apropiadamente los campos. (Contraseña mínimo 8 caracteres)
              </Alert>
          )}

          {passNotSame && (
              <Alert
                  icon={<ErrorOutlineIcon fontSize="inherit" />}
                  severity="error"
                  sx={ { mt : 2 } }
                  onClose={() => {
                      setPassNotSame(false);
                  }}>
                  Las contraseñas no coinciden.
              </Alert>
          )}
          {existingUserError && (
              <Alert
                  icon={<ErrorOutlineIcon fontSize="inherit" />}
                  severity="error"
                  sx={ { mt : 2 } }
                  onClose={() => {
                      setExistingUserError(false);
                  }}>
                  Usuario ya existente
              </Alert>
          )}
      </Container>

    </Container>
  );
};

export default RegisterPage;
