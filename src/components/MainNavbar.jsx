import { Container, Input, Button, Grid, Alert } from '@mui/material';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const MainNavbar = () => {
  const [filtro, setFiltro] = useState([]);
  const [noEncontrado, setNoEncontrado] = useState(false)
  const navigate = useNavigate();

  const filtrarContenido = async (e) => {
    if (e.key === 'Enter') {
      const response = await fetch(`http://localhost:8000/cineulima/busqueda/${filtro}`)
      const data = await response.json()

      if (data.peliculas.length > 0) {
        setFiltro(data.peliculas)
        navigate('/peliculas', { state: { filtro: data.peliculas }})
      }
      else if(data.salas.length > 0){
        setFiltro(data.salas)
        navigate('/salas', { state: { filtro: data.salas }})
      }
      else {
        setNoEncontrado(true)
      }
    }
  }

  return (
    <Container maxWidth="md" sx={{ marginTop: '40px', fontFamily: 'Roboto, sans-serif' }}>
      <p style={{ fontWeight: 'bold', fontSize: '12px', margin: '0' }}>Búsqueda</p>
      <Input
        placeholder="Buscar por título, actores, actrices, géneros o cines"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
        onKeyPress={filtrarContenido}
        fullWidth
      />
      {
        (() => {
          if (noEncontrado) {
            return <Alert
              severity="error"
              sx={{ mt: 2 }}>
              No se encontraron resultados
            </Alert>
          }
        })()
      }
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
                backgroundColor: '#FA7525',
              }}
              component={Link}
              to={'/peliculas'}>
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
                backgroundColor: '#FA7525',
              }}
              component={Link}
              to={'/salas'}>
              SALAS
            </Button>
          </Grid>
        </Grid>
      </div>
    </Container>
  )
}

export default MainNavbar