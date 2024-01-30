import { Container, Grid } from "@mui/material"
import PageLayout from "../components/PageLayout"
import SalasBody from "../components/SalasBody"

const SalasPage = () => {
  return(
    <PageLayout>
    <Grid
      container
      style={{ fontFamily: 'Roboto, sans-serif' }}>
      <Container>
        <h2 style={{
          borderBottom: '1px solid #0000001F',
          marginBottom: '5%',
          marginTop: "25px",
          fontSize: '34px',
          fontWeight: 400,
          letterSpacing: 0.25
        }}>Salas Disponibles</h2>
        <SalasBody/>
      </Container>
    </Grid>
    </PageLayout>)
}

export default SalasPage
