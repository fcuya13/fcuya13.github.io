import { Container, Button, Typography, alpha } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ErrorPage = ({ img }) => {
    const navigate = useNavigate();

    return (
        <Container
            maxWidth={false}
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
                    width: "50vw",
                    height: "30vw",
                    marginBottom: 5,
                    backgroundColor: "white",
                    p: "20px",
                    borderRadius: 2,
                    position: "relative",
                    backgroundImage: `url(${img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        bottom: 20,
                        left: 20,
                        right: 20,
                        textAlign: "center",
                    }}
                >
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
                </div>
            </Container>
        </Container>
    );
};

export default ErrorPage;
