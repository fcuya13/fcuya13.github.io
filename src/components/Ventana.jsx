import {Box, Avatar, Typography, Button } from "@mui/material"
import {useNavigate} from "react-router-dom"
import Divider from '@mui/material/Divider';


const Ventana=(props)=>{

    const estiloBoton ={
        border: '1px dashed #9747FF',
        backgroundColor: 'rgba(151, 71, 255, 0.04)',
        color: '#9747FF',
        padding: '4px 24px 4px 24px',
        width: '80px',
        height: '28px'
    }

    const navigate = useNavigate();

    const handleReservaClick = (fecha,horario,funcionid) => {
        
        const datosReserva ={
          pelicula: props.pelicula,
          horario: horario,
          fecha: fecha,
          sala: props.name,
          funcionid:funcionid
        };
    
        navigate("/reserva", { state: {datos:datosReserva}});
    };

    return <Box key={props.fecha}>
        <Typography sx={{ mt: 1, mb:1 }}>
            {props.fecha}
        </Typography>
        {props.horarios.map((horario, index) => (
            <Button
                key={horario}
                style={estiloBoton}
                onClick={() => handleReservaClick(props.fecha, horario, props.funcionid[index])}
                sx={{ mr: 1, mb: 1 }}> 
                {horario}
            </Button>
        ))}
        <Divider variant="middle" sx={{mt:1, backgroundColor:"gray"}} />
    </Box>
}

export default Ventana