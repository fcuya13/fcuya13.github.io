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
                id = {e.id}
                name={e.nombre}
                address={e.direccion}
                image={e.imagen}
                available_times={e.horarios}
                path={e.path}
            />
            )
        })
      }
    </Grid>
  )
}

export default CardList2
