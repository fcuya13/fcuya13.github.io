import {Button } from "@mui/material"
import {useNavigate} from "react-router-dom"


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

    const handleReservaClick = (funcionid) => {
    
        navigate("/reserva", { state: {datos:funcionid}});
    };

    return <Button
                key={props.funcionid}
                style={estiloBoton}
                onClick={() => handleReservaClick(props.funcionid)}
                sx={{ mr: 1 }}>
                {props.hora}
            </Button>

}

export default Ventana