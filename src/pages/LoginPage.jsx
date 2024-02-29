import {Container, TextField, Button, Typography, alpha, CircularProgress, Backdrop } from "@mui/material";
import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import Alert from "@mui/material/Alert";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import {Helmet} from "react-helmet";

const LoginPage = () => {
    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const [errormsg, setErrormsg] = useState("")
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const user = sessionStorage.getItem("user");
        if (user) {
            navigate("/home");
        }
    }, [navigate]);

    const validarInputs = () => {
        const email = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        return correo.trim().length !== 0 &&
            email.test(correo.trim()) &&
            password.trim().length !== 0;
    };

    
    const validateUserPassword = async () => {

        if (!validarInputs()) {
            setError(true);
            setErrormsg("Complete apropiadamente los campos.")
            return;
        }

        const dataUser = {
            correo: correo,
            password: password
        }

        try {
            setLoading(true)
            const response = await Promise.race([
                fetch("https://cineulima.azurewebsites.net/cineulima/users", {
                    method: "POST",
                    body: JSON.stringify(dataUser)
                }),
                new Promise((_, reject) =>
                    setTimeout(() => reject(new Error('Tiempo de espera excedido')), 40000)
                )
            ])

            if (!response.ok) {
                const data = await response.json();
                const errData = data.msg
                setError(true)
                setErrormsg(errData)
            } else {
                const data = await response.json();
                const storageData = JSON.stringify(data);
                navigate("/home");
                sessionStorage.setItem("user", storageData);
            }
        }
        catch (error) {
            setError(true)
            navigate('/error/500')
        } finally {
            setLoading(false)
        }
    }

    return <>
        <Helmet>
            <title>Iniciar Sesión | Cine Ulima</title>
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
                maxWidth: "500px",
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
                        sx={{marginBottom: 2}}
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                        onKeyDown={(e)=> {
                            if (e.key === "Enter"){
                                validateUserPassword()
                            }
                        }}
                    />
                    <TextField
                        label="Contraseña"
                        variant="outlined"
                        fullWidth
                        type="password"
                        sx={{marginBottom: 1}}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onKeyDown={(e)=> {
                            if (e.key === "Enter"){
                                validateUserPassword()
                            }
                        }}
                    />
                    <Typography component={Link} to="/recupera" color="#FA7525"
                                sx={{
                                    fontSize: '15px'
                                }}>
                        Olvidé mi contraseña
                    </Typography>
                    <Button
                        variant="contained"
                        color="warning"
                        fullWidth
                        sx={{
                            marginTop: 3,
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
                            marginTop: 1,
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
            </Container>

            <Backdrop
                sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                open={loading}
            >
                <CircularProgress color="inherit"/>
            </Backdrop>
        </Container>
    </>
};

export default LoginPage;
