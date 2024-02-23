import {Card, CardActionArea, Button, CardMedia, CardContent, Typography} from '@mui/material'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from "@mui/icons-material/LocationOn"
import LocalActivityIcon from '@mui/icons-material/LocalActivity';

const Cards3 = (props) => {


    return <Card item xs={6}
                 sx={{marginRight: "30px", marginBottom: "30px", maxWidth: "300px", height: "100%", cursor: "default"}}>
        <CardActionArea>
            <CardMedia
                component="img"
                sx={{
                    width: "300px",
                    height: "390px"
                }}
                image={props.thumbnail}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom noWrap={true} variant="h6" component="div" align="center"
                            sx={{fontWeight: 'bold'}}>
                    {props.titulo}
                </Typography>
                <Typography variant="body2">
                    <CalendarMonthIcon sx={{mr: 1}}/>
                    {props.fecha} | {props.hora}
                </Typography>
                <Typography variant="body2" sx={{fontWeight: 'bold', textTransform: 'uppercase'}}>
                    <LocationOnIcon sx={{mr: 1}}/>
                    {props.sala}
                </Typography>
                <Typography variant="body2">
                    <LocalActivityIcon sx={{mr: 1}}/>
                    {props.cantidad} Entradas
                </Typography>

            </CardContent>
        </CardActionArea>

    </Card>
}

export default Cards3
