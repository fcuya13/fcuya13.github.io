import { Container, Grid, Typography } from "@mui/material"
import MovieBody from "../components/MovieBody"
import PageLayout from "../components/PageLayout"
import { useState } from "react"

const MoviesPage = () => {
  const [searchTerm, setSearchTerm] = useState("")
  return(
    <PageLayout onSearchChange={setSearchTerm}>
    <Grid
      container
      sx={{ fontFamily: 'Roboto, sans-serif' }}>
      <Container>
        <Typography variant="h4"  
          sx={{
          borderBottom: '1px solid #0000001F',
          marginBottom: '5%',
          marginTop: "25px",
          fontSize: '34px',
          fontWeight: 400,
          letterSpacing: 0.25
        }}>Películas</Typography>
        <MovieBody searchTerm={searchTerm}/>
      </Container>
    </Grid>
    </PageLayout>)
}

export default MoviesPage
