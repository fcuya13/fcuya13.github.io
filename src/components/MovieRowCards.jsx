import { Grid } from "@mui/material"
import MovieCards from "./MovieCards"

const MovieRowCards = (props) => {
    return <Grid
        container
        sx={ {marginBottom : '25px'}}>
            {
            props.row.map((elem) => {
                return <MovieCards 
                    inf={ elem.inf }
                    tittle= { elem.tittle }
                    label1 = { elem.label1 }
                    label2 = { elem.label2 }
                    path = { elem.path }
                />
            })
        }
    </Grid>
}

export default MovieRowCards
