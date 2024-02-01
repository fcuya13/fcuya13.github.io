import Cards from "./Cards"
import { Grid } from "@mui/material"

const CardList = (props) => {
  return (
    <Grid 
      container 
      sx={{ marginBottom: '25px'}}>
      {
        props.list.map((e) => {
            return (
                <Cards 
                    pelicula={e}
                    id={e.id}
                    title={e.title}
                    year={e.year}
                    cast={e.cast}
                    genres={e.genres}
                    extract={e.extract}
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