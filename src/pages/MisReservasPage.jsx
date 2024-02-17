import PageLayout from "../components/PageLayout"
import {
    Container,
    Typography,
    Card,
    CardContent,
    CardActionArea,
    CardMedia,
    Box,
    Modal,
    Image
} from "@mui/material"
import {useState} from "react"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from "@mui/icons-material/LocationOn"


const MisReservasPage = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <PageLayout>
                <Container>
                    <Typography
                        variant="h4"
                        sx={{
                            borderBottom: '1px solid #0000001F',
                            marginBottom: '5%',
                            marginTop: "25px",
                            fontSize: '34px',
                            fontWeight: 400,
                            letterSpacing: 0.25
                        }}>Mis Reservas</Typography>
                    <Container>
                        <Card sx={{maxWidth: 345}} onClick={handleOpen}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    sx={{display: {xs: "none", sm: "block"}}}
                                    height="200px"
                                    image="https:\/\/upload.wikimedia.org\/wikipedia\/en\/4\/4a\/Underwater_poster.jpeg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom noWrap={true} variant="h6" component="div" align="center"
                                                sx={{fontWeight: 'bold'}}>
                                        El especial del humor
                                    </Typography>
                                    <Typography variant="body2">
                                        <CalendarMonthIcon sx={{mr: 1}}/>
                                        17/02/2024 | 09:10
                                    </Typography>
                                    <Typography variant="body2" sx={{fontWeight: 'bold', textTransform: 'uppercase'}}>
                                        <LocationOnIcon sx={{mr: 1}}/>
                                        Sala xdxd
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>

                    </Container>
                </Container>

            </PageLayout>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: {xs: '80%', sm: '20%'},
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    borderRadius: 2,
                    p: 4,
                    textAlign: 'center'
                }}>
                    <Typography id="modal-modal-title" variant="h6" component="h2"
                                sx={{fontWeight: 'bold', fontSize: 36, lineHeight: 1}}
                                align="center">
                        El especial del humor
                    </Typography>

                    <img src="/qr.jpg" width="90%"/>

                    <Typography variant="body2">
                        17/02/2024 | 09:10
                    </Typography>
                    <Typography variant="body2" sx={{fontWeight: 'bold', textTransform: 'uppercase'}}>
                        Sala xdxd
                    </Typography>
                </Box>
            </Modal>
        </>
    )
}

export default MisReservasPage