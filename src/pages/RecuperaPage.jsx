import {Container, TextField, Button, Typography, alpha, Modal, Box} from "@mui/material";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";

const RecuperaPage = () => {
    const [correo, setCorreo] = useState("")
    const [usuarios, setUsuarios] = useState([])
    const [error, setError] = useState(false);
    const [notFound, setNotFound] = useState(false);
    const [sent, setSent] = useState(false);
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const obtenerUsuarios = async () => {
        const response = await fetch ("http://localhost:3000/users.json");
        const data = await response.json()
        setUsuarios(data)
    }

    useEffect(() => {
        obtenerUsuarios()
    }, []);
    const validateUserPassword = async () => {
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
        </form>
      </Container>
        {error && (
            <Alert
                icon={<CheckIcon fontSize="inherit" />}
                severity="error"
                sx={ { mt : 2 } }>
                Ha ocurrido un error. Inténtelo nuevamente
            </Alert>
        )}
        {notFound && (
            <Alert
                icon={<CheckIcon fontSize="inherit" />}
                severity="error"
                sx={ { mt : 2 } }>
                Cuenta no existe. Ingrese una cuenta válida
            </Alert>
        )}
        {sent && (
            <Alert
                icon={<CheckIcon fontSize="inherit" />}
                severity="success"
                sx={ { mt : 2 } }>
                Credenciales incorrectas. Inténtelo nuevamente
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