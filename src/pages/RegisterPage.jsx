import { Container, TextField, Button, Typography, alpha } from "@mui/material";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";

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
    }, []);

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
          style={{
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
              color="warning"
              fullWidth
              sx={{
                marginTop: 2,
                fontSize: 15,
                fontWeight: 500,
                letterSpacing: 0.46,
              }}
              onClick={validateRegisterForm}
            >
              INGRESAR
            </Button>
          </div>
        </form>
          {error && (
              <Alert
                  icon={<CheckIcon fontSize="inherit" />}
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
                  icon={<CheckIcon fontSize="inherit" />}
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
                  icon={<CheckIcon fontSize="inherit" />}
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
