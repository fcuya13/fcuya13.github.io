import Cards from "./Cards"
import { Grid } from "@mui/material"

const CardList = (props) => {
  return (
    <Grid 
      container
      sx={{ marginBottom: '25px', justifyContent: {xs:"center"}}}>
      {
        props.list.map((e) => {
            return (
                <Cards 
                    id={e.id}
                    title={e.title}
                    cast={e.cast}
                    genres={e.genres}
                    thumbnail={e.thumbnail}
                    path={e.path}
                    />
            )
        })
      }
    </Grid>
  )
}

export default CardList
