import {Container, TextField, Button, Typography, alpha, CircularProgress, Backdrop} from "@mui/material";
import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import Alert from "@mui/material/Alert";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import {Helmet} from "react-helmet";

const RegisterPage = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");
    const [passConf, setPassConf] = useState("");
    const [error, setError] = useState(false);
    const [errormsg, setErrormsg] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        const user = sessionStorage.getItem("user");
        if (user) {
            navigate("/home");
        }
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

        if (!validarInputs()) {
            setError(true);
            setErrormsg("Complete apropiadamente los campos. (Contraseña mínimo 8 caracteres)")
            return;
        }

        if (password !== passConf) {
            setError(true);
            setErrormsg("Las contraseñas no son iguales")
            return;
        }

        const dataUser = {
            nombre: nombre,
            apellidos: apellido,
            correo: correo,
            password: password
        }

        try{
            setLoading(true)
            const response = await Promise.race([
                fetch("https://cineulima.azurewebsites.net/cineulima/createuser", {
                method: "POST",
                body: JSON.stringify(dataUser)
            }),
                new Promise((_, reject) =>
                    setTimeout(() => reject(new Error('Tiempo de espera excedido')), 40000)
                )
            ])

            const data = await response.json()

            if (response.status === 200) {
                const storageData = JSON.stringify(data);
                navigate("/home")
                sessionStorage.setItem("user", storageData);
            } else {
                const errData = data.msg
                setError(true)
                setErrormsg(errData)
                setLoading(false)

            }
        }
        catch (error) {
            setError(true)
            navigate('/error/500')
        }
        finally {
            setLoading(false)
        }
    }

    return <>
        <Helmet>
            <title>Registrarse | Cine Ulima</title>
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
            <Container
                sx={{
                    width: {xs: "80%", md: "40%"},
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
                        sx={{marginBottom: 1}}
                        fullWidth
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        onKeyDown={(e)=> {
                            if (e.key === "Enter"){
                                validateRegisterForm()
                            }
                        }}
                    />
                    <TextField
                        label="Apellidos"
                        variant="outlined"
                        sx={{marginBottom: 1}}
                        fullWidth
                        value={apellido}
                        onChange={(e) => setApellido(e.target.value)}
                        onKeyDown={(e)=> {
                            if (e.key === "Enter"){
                                validateRegisterForm()
                            }
                        }}
                    />

                    <TextField
                        label="Correo"
                        variant="outlined"
                        sx={{marginBottom: 1}}
                        fullWidth
                        type="email"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                        onKeyDown={(e)=> {
                            if (e.key === "Enter"){
                                validateRegisterForm()
                            }
                        }}
                    />
                    <TextField
                        label="Contraseña"
                        variant="outlined"
                        fullWidth
                        sx={{marginBottom: 1}}
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onKeyDown={(e)=> {
                            if (e.key === "Enter"){
                                validateRegisterForm()
                            }
                        }}
                    />
                    <TextField
                        label="Confirmar Contraseña"
                        variant="outlined"
                        fullWidth
                        sx={{marginBottom: 1}}
                        type="password"
                        value={passConf}
                        onChange={(e) => setPassConf(e.target.value)}
                        onKeyDown={(e)=> {
                            if (e.key === "Enter"){
                                validateRegisterForm()
                            }
                        }}
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

export default RegisterPage;
