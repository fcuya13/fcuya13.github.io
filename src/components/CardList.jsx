import { Grid } from "@mui/material"
import Cards from "./Cards"

const MovieRowCards = (props) => {
    return <Grid
        container
        sx={ {marginBottom : '25px'}}>
            {
            props.row.map((elem) => {
                return <Cards 
                    inf={ elem.inf }
                    tittle= { elem.tittle }
                    labels = { elem.labels }
                    path = { elem.path }
                />
            })
        }
    </Grid>
}

export default MovieRowCards
