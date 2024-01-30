import { Container, Grid, Typography } from "@mui/material"
import MoviesBody from "../components/MoviesBody"
import PageLayout from "../components/PageLayout"

const MoviesPage = () => {
  return(
    <PageLayout>
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
        <MoviesBody/>
      </Container>
    </Grid>
    </PageLayout>)
}

export default MoviesPage
