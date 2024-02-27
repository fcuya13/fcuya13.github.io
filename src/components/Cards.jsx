import { Card, CardActionArea, CardMedia, CardContent, Typography, Chip } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Cards = (props) => {
    const navigate = useNavigate()
    const cardOnClick = () => {
        navigate(props.path)
    }

    return <Card item xs={4} sx={{ marginRight: "30px", marginBottom: "30px", maxWidth: "300px", height: "100%" }}>
        <CardActionArea onClick={cardOnClick}>
            <CardMedia
                sx={{
                    width: "300px",
                    height: "390px"
                }}
                >
                <img src={props.thumbnail} alt={props.titulo} style={{ width: '100%', height: "100%" }} />
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
                    }}>{props.titulo}</Typography>

                {props.genres.map((label,index) => {
                    return <Chip
                        key={index}
                        label={label}
                        sx={{ marginRight: "10px", marginBottom: "5px" }} />
                })}
            </CardContent>
        </CardActionArea>
    </Card>
}

export default Cards


