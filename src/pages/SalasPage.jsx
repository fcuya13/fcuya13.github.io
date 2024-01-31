import { Container, Grid,Typography } from "@mui/material"
import PageLayout from "../components/PageLayout"
import SalasBody from "../components/SalasBody"

const SalasPage = () => {
  return(
    <PageLayout>
    <Grid
      container
      style={{ fontFamily: 'Roboto, sans-serif' }}>
      <Container>
        <Typography 
          variant="h4" 
          sx={{
            borderBottom: '1px solid #0000001F',
            marginBottom: '5%',
            marginTop: "25px",
            fontSize: '34px',
            fontWeight: 400,
            letterSpacing: 0.25
        }}>Salas Disponibles</Typography>
        <SalasBody/>
      </Container>
    </Grid>
    </PageLayout>)
}

export default SalasPage
