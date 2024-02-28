import CardList from "./CardList"
import {Box} from "@mui/material"

const MovieBody = (props) => {
    return (
        <Box>
            <CardList list={props.moviesData}/>
        </Box>
    )
}

export default MovieBody