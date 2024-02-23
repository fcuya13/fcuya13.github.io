import {Container, Button, Typography, alpha} from "@mui/material";
import {useNavigate} from "react-router-dom";

const ErrorPage = () => {

    const navigate = useNavigate();

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
                marginBottom: 5,
                backgroundColor: "white",
                p: "20px",
                borderRadius: 2,
            }}>
                <Typography
                    variant="h1"
                    align="center"
                    sx={{
                        fontWeight: "bold",
                        fontSize: 120
                    }}>
                    404
                </Typography>
                <Typography
                    variant="h5"
                    align="center"
                >
                    La página ingresada no existe. Por favor ingrese una dirección válida.
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
                    onClick={() => {
                        navigate("/login")
                    }}
                >
                    REGRESAR
                </Button>
            </Container>

        </Container>
    )
};

export default ErrorPage;