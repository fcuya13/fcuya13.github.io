import { Grid } from "@mui/material"
import Cards from "./Cards"

const CardList = (props) => {
    return (
        <Grid container sx={{ marginBottom: '25px' }}>
            {props.list.map((elem) => {
                return (
                    <Cards
                        inf={elem.inf}
                        tittle={elem.tittle}
                        size={props.size}
                        labels={elem.labels}
                        path={elem.path}
                    />
                )
            })}
        </Grid>
    )
}

export default CardList
