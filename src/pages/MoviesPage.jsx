import { Container, Box, Grid } from "@mui/material"
import MoviesBody from "../components/MoviesBody"
import PageLayout from "../components/PageLayout"

const MoviesPage = () => {
  return(
    <PageLayout>
    <Grid
      container
      style={{ marginTop: '20px', fontFamily: 'Roboto, sans-serif' }}>
      <Container>
        <h2 style={{
          borderBottom: '1px solid #0000001F',
          marginTop: '30px',
          marginBottom: '5%',
          fontSize: '34px',
          fontWeight: 400,
          letterSpacing: 0.25
        }}>Películas</h2>
        <MoviesBody />
      </Container>
    </Grid>
    </PageLayout>)
}

export default MoviesPage
