import {Box, Avatar, Typography, Button } from "@mui/material"
import {useNavigate} from "react-router-dom"

const Disponibles2 = (props) => {
    const estiloBoton ={
        border: '1px dashed #9747FF',
        backgroundColor: 'rgba(151, 71, 255, 0.04)',
        color: '#9747FF',
        padding: '4px 24px 4px 24px',
        width: '80px',
        height: '28px'
    }

    const navigate = useNavigate();

    const handleReservaClick = (funcionid) => {

        navigate("/reserva", { state: {datos:funcionid}});
    };

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
            {props.available_times.map(label => {
                return <Button 
                    style={estiloBoton} 
                    onClick={() => handleReservaClick(label.funcion_id)} sx={{mr:1, mb:1}}>
                    {label.hora}
                </Button>
            })}
        </Box>
    </Box>
}

export default Disponibles2