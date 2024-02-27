import {Box, Avatar, Typography, Button } from "@mui/material"
import Ventana from "./Ventana";

const Disponibles = (props) => {

    return <Box item xs = {6} width="50%" minWidth="15em" sx={{mt:8}}>
        <Box>
            <Avatar variant="rounded" sx={{ mb: 2,  display:'inline-flex'}}>
                {props.siglas}
            </Avatar>
            <Typography variant='h6' sx={{ mb: 2, ml: 2,  display:'inline-flex'}}>
                <b>{props.name}</b>
            </Typography>
        </Box>
        <Typography color="gray" sx={{ mb: 2}}>
                {props.descripcionDisponible}
        </Typography>
        <Box>
            <Typography variant="subtitle1" sx={{ mb: 2}}>
                <b>Fechas y horarios:</b>
            </Typography>
            {props.ventanas.map((ventana) => {
                return <Ventana 
                    fecha={ventana.fecha} 
                    horarios={ventana.horarios.map(horario=>horario.hora)}
                    funcionid={ventana.horarios.map(horario=>horario.funcionid)}
                    pelicula={props.pelicula}
                />
            })
            }
        </Box>
    </Box>
}

export default Disponibles