import { Grid } from "@mui/material"
import Cards2 from "./Cards2"

const SalasRowCards = (props) => {
    return <Grid
        container
        sx={ {marginBottom : '25px'}}>
            {
            props.row.map((elem) => {
                return <Cards2 
                    inf={ elem.inf }
                    tittle= { elem.tittle }
                    labels = { elem.labels }
                    path = { elem.path }
                />
            })
        }
    </Grid>
}

export default SalasRowCards