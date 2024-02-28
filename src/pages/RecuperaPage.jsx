import {Container, TextField, Button, Typography, alpha, Modal, Box, CircularProgress, Backdrop} from "@mui/material";
import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import Alert from "@mui/material/Alert";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import {Helmet} from "react-helmet";

const RecuperaPage = () => {
    const [correo, setCorreo] = useState("")
    const [error, setError] = useState(false);
    const [errormsg, setErrormsg] = useState("")
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const user = sessionStorage.getItem("user");
        if (user) {
            navigate("/home");
        }
    }, [navigate]);

    const validarInputs = () => {
        const email = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        return correo.trim().length !== 0 &&
            email.test(correo.trim())
    };

    const validateUserPassword = async () => {

        if (!validarInputs()) {
            setError(true);
            setErrormsg("Ingrese un correo válido")
            return;
        }

        const dataUser = {
            "correo": correo,
        }

        try {
            setLoading(true)
            const response = await fetch("https://cineulima.azurewebsites.net/cineulima/recovery", {
                method: "POST",
                body: JSON.stringify(dataUser)
            })

            if (response.status === 200) {
                setLoading(false)
                setOpen(true)
            } else {
                const data = await response.json()
                setErrormsg(data.msg)
                setError(true)
                setLoading(false)

            }
        }catch (error) {
            setError(true)
            setErrormsg("Ha ocurrido un error. Por favor inténtelo más tarde")
            setLoading(false)
            }
    };

    return <>
        <Helmet>
            <title>Recuperar cuenta | Cine Ulima</title>
        </Helmet>
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
                width: {xs: "80%", md: "40%"},
                marginBottom: 5,
                backgroundColor: "white",
                p: "20px",
                borderRadius: 2,
            }}>
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
                        sx={{marginBottom: 1}}
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
                    icon={<ErrorOutlineIcon fontSize="inherit"/>}
                    severity="error"
                    sx={{mt: 2}}
                    onClose={() => {
                        setError(false);
                    }}>
                    {errormsg}
                </Alert>
            )}

            <Modal
                open={open}
                onClose={() => {
                    navigate("/login");
                }}

            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 600,
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    borderRadius: 2,
                    p: 4,
                }}>
                    <Typography variant="h6" component="h2" textAlign="c ">
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
            <Backdrop
                sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                open={loading}
            >
                <CircularProgress color="inherit"/>
            </Backdrop>
        </Container>
    </>
};

export default RecuperaPage;