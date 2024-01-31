import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography, Chip } from '@mui/material'
import { Link } from 'react-router-dom'

const Cards2 = (props) => {
    return (
        <Grid item xs={6} justifyContent="center">
            <Card sx={{ marginRight: "30px", marginBottom: "30px" }}>
                <CardActionArea>
                    <CardMedia
                        sx={{
                            width: "100%", 
                            height: "250px"
                        }}
                        component={Link}
                        to={"/"}>
                        <img src={props.image} alt={props.name} style={{ width: '100%', height: "100%" }} /> 
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
                            }} >{props.address}
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
                            }}>{props.name}</Typography>
                            
                        {props.available_times.map(label => {
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

export default Cards2
