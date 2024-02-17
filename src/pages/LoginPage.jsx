import {Container, TextField, Button, Typography, alpha} from "@mui/material";
import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import Alert from "@mui/material/Alert";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const LoginPage = () => {
    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const [errormsg, setErrormsg] = useState("")

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
            const response = await fetch("http://localhost:8000/cineulima/users", {
                method: "POST",
                body: JSON.stringify(dataUser)
            })

            const data = await response.json()

            if (response.status === 200) {
                const storageData = JSON.stringify(data);
                navigate("/home")
                sessionStorage.setItem("user", storageData);
            } else {
                const errData = data.msg
                setError(true)
                setErrormsg(errData)
            }
        } catch (error) {
            setError(true)
            setErrormsg("Ha ocurrido un error. Por favor inténtelo más tarde")
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
                    />
                    <TextField
                        label="Contraseña"
                        variant="outlined"
                        fullWidth
                        type="password"
                        sx={{marginBottom: 1}}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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


        </Container>
    );
};

export default LoginPage;
