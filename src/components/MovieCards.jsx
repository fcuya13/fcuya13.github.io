import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography, Icon, Chip } from '@mui/material';
import PhotoIcon from '@mui/icons-material/Photo';
import { Link } from "react-router-dom";

const MovieCards = (props) => {
    return (
        <Grid item xs={4} justifyContent="center">
            <Card sx={ {marginRight: "20px"} }>
                <CardActionArea>
                    <CardMedia
                        sx={{
                            backgroundColor: '#0000008F', 
                            display: 'flex', 
                            justifyContent: 'center', 
                            alignItems: 'center', 
                            height : 200 }}
                            component={Link}
                            to={props.path}>
                        <Icon component={PhotoIcon} style={{ fontSize: 64, color: 'white' }} />
                    </CardMedia>
                    <CardContent>
                        <Typography
                            sx={{
                                fontSize : "14px",
                                color : "#2196F3",
                                fontStyle : "normal",
                                fontWeight : 500,
                                lineHeight : "157%",
                                letterSpacing : 0.1
                            }} >{ props.inf }
                        </Typography>
                        <Typography
                            sx={{
                                fontSize : "20px",
                                marginBottom : "25px",
                                marginTop : "10px",
                                fontStyle : "normal",
                                fontWeight : 550,
                                lineHeight : "160%",
                                letterSpacing : 0.15

                            }}>{ props.tittle }</Typography>
                        <Chip 
                            label={ props.label1 }
                            sx = {{marginRight : "10px"}} />
                        <Chip 
                            label={ props.label2 }
                            sx = {{marginRight : "10px"}} />
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    )
}

export default MovieCards
