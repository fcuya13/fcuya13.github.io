import { Card, CardActionArea, CardMedia, CardContent, Typography, Chip } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Cards2 = (props) => {
    const navigate = useNavigate()
    const cardOnClick = () => {
        navigate(props.path)
    }

    return <Card item xs={6} sx={{ marginRight: "30px", marginBottom: "30px", maxWidth: "450px", height: "100%" }}>
        <CardActionArea onClick={cardOnClick}>
            <CardMedia
                sx={{
                    width: "450px",
                    height: "250px"
                }}
                component="img"
                image={props.image}
                >
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
}

export default Cards2
