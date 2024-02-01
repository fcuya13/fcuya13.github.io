import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography, Chip } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'

const Cards = (props) => {
    const navigate= useNavigate()
    const cardOnClick=()=>{
        navigate(props.path, {state: {pelicula: props.pelicula}})
    }

    return (
        <Grid item xs={4} justifyContent="center">
            <Card sx={{ marginRight: "30px", marginBottom: "30px" }}>
                <CardActionArea>
                    <CardMedia
                        sx={{
                            width: "100%", 
                            height: "390px"
                        }}
                        onClick={cardOnClick}>
                        <img src={props.thumbnail} alt={props.title} style={{ width: '100%', height: "100%" }} /> 
                    </CardMedia>
                    <CardContent>
                        <Typography
                            sx={{
                                fontSize: "14px",
                                color: "#2196F3",
                                fontStyle: "normal",
                                fontWeight: 500,
                                lineHeight: "157%",
                                letterSpacing: 0.1
                            }} >{props.year}
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "20px",
                                marginBottom: "25px",
                                marginTop: "10px",
                                fontStyle: "normal",
                                fontWeight: 550,
                                lineHeight: "160%",
                                letterSpacing: 0.15
                            }}>{props.title}</Typography>
                            
                        {props.genres.map(label => {
                            return <Chip
                                label={label}
                                sx={{ marginRight: "10px", marginBottom: "5px" }} />
                        })}
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    )
}

export default Cards


