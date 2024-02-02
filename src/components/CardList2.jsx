import Cards2 from "./Cards2"
import { Grid } from "@mui/material"

const CardList2 = (props) => {
  return (
    <Grid 
      container 
      sx={{
        marginBottom: '25px', justifyContent: {xs:"center"}}}>
      {
        props.list.map((e) => {
            return (
                <Cards2
                name={e.name}
                address={e.address}
                image={e.image}
                available_times={e.available_times}
                path={e.path}
            />
            )
        })
      }
    </Grid>
  )
}

export default CardList2
