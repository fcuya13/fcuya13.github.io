import CardList2 from "./CardList2"
import {Box} from "@mui/material"

const SalasBody = (props) => {

    return (
        <Box>
            <CardList2 list={props.salasData} />
        </Box>
    )
}

export default SalasBody
