import {Container, TextField, Button, Typography, alpha, Modal, Box} from "@mui/material";
import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import Alert from "@mui/material/Alert";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const RecuperaPage = () => {
    const [correo, setCorreo] = useState("")
    const [usuarios, setUsuarios] = useState([])
    const [error, setError] = useState(false);
    const [notFound, setNotFound] = useState(false);
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

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
    const validateUserPasswordOld = async () => {
        const listaFiltrada = usuarios.filter((usuario) => {
          return usuario.correo === correo;
        });
      
        if (listaFiltrada.length > 0) {
            const usuarioEncontrado = listaFiltrada[0]
            console.log(usuarioEncontrado)
            try {
                const response = await fetch("http://localhost:5000/send-email", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(usuarioEncontrado),
                });
          
                if (response.ok) {
                  console.log("Email sent");
                } else {
                  console.log("Error sending email");
                  setError(true);
                }
              } catch (error) {
                console.log("Error sending email", error);
                setError(true)
              }
          setOpen(true);
        } else {
          setNotFound(true);
        }
      };

    const validateUserPassword = async () => {
        const listaFiltrada = usuarios.filter((usuario) => {
            return usuario.correo === correo;
        });

        const url = 'https://corsproxy.io/?' + encodeURIComponent('https://api.postmarkapp.com/email');

        if (listaFiltrada.length > 0) {
            const usuarioEncontrado = listaFiltrada[0]
            fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-Postmark-Server-Token': '03e0b67c-4d69-41f6-b1c6-de4811ecf021'
                },
                body: JSON.stringify({
                    "From": "20210773@aloe.ulima.edu.pe",
                    "To": usuarioEncontrado.correo,
                    "Subject": "¿Olvidó su contraseña?",
                    "TextBody": `Su contraseña es ${usuarioEncontrado.password}`,
                    "MessageStream": "broadcast"
                })
            })
                .then(response => {
                    if (response.ok){
                        setOpen(true);
                    }
                })
                .then(data => console.log(data))
                .catch(error => setError(true));
        } else {
            setNotFound(true);
        }
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
      <Container sx={{
          width: {xs:"80%", md: "40%"},
          marginBottom: 5,
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
            sx={{ marginBottom: 1 }}
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
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
            onClick={validateUserPassword}
          >
            ENVIAR CONTRASEÑA
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
      </Container>
        {error && (
            <Alert
                icon={<ErrorOutlineIcon fontSize="inherit" />}
                severity="error"
                sx={ { mt : 2 } }
                onClose={() => {
                    setError(false);
                }}>
                Ha ocurrido un error. Inténtelo nuevamente

            </Alert>
        )}
        {notFound && (
            <Alert
                icon={<ErrorOutlineIcon fontSize="inherit" />}
                severity="error"
                sx={ { mt : 2 } }
                onClose={() => {
                    setNotFound(false);
                }}>
                Cuenta no existe. Ingrese una cuenta válida

            </Alert>
        )}

        <Modal
            open={open}
            onClose={() => {
                navigate("/login");
            }}

        >
            <Box sx={{position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 600,
                bgcolor: 'background.paper',
                boxShadow: 24,
                borderRadius: 2,
                p: 4,}}>
                <Typography variant="h6" component="h2" textAlign="center">
                    Correo enviado. Por favor revise su bandeja de entrada
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
                    onClick={() => {
                        navigate("/login")
                    }}
                >
                    Ir al login
                </Button>

            </Box>
        </Modal>
    </Container>
  )
};

export default RecuperaPage;