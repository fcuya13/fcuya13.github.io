import { Container, Input, Button, Grid } from '@mui/material';
import { useState } from 'react';
import { Link } from "react-router-dom";

const MainNavbar = () => {
  const [search, setSearch] = useState("")

  return (
    <Container
      maxWidth="md"
      sx={{ marginTop: '40px', fontFamily: 'Roboto, sans-serif' }
      }>
      <p style={{ fontWeight: 'bold', fontSize: '12px', margin: '0' }}>Búsqueda</p>
      <Input
        placeholder="Busca por título, actores, actrices, género, etc"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        fullWidth />

      <div style={{ marginTop: '60px' }}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={6} display="flex" justifyContent="center">
            <Button
              variant="contained"
              color="warning"
              sx={{
                width: '217px',
                fontSize: 15,
                fontWeight: 700,
                lineHeight: '26px',
                letterSpacing: 0.46,
                backgroundColor: "#FA7525",
              }}
              component={Link}
              to={"/peliculas"}>
              PELÍCULAS
            </Button>
          </Grid>
          <Grid item xs={6} md={6} display="flex" justifyContent="center">
            <Button
              variant="contained"
              color="warning"
              sx={{
                width: '217px',
                fontSize: 15,
                fontWeight: 700,
                lineHeight: '26px',
                letterSpacing: 0.46,
                backgroundColor: "#FA7525",
              }}
              component={Link}
              to={"/salas"}>
              SALAS
            </Button>
          </Grid>
        </Grid>
      </div>
    </Container>
  )
}

export default MainNavbar
