import { Container, Input, Button, Grid, Alert } from '@mui/material';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const MainNavbar = () => {
  const [filtro, setFiltro] = useState('');
  //const [noEncontrado, setNoEncontrado] = useState(false)
  //const navigate = useNavigate();

  /*
  const filtrarCotenido = async () => {
    const response = await fetch(`http://localhost:8000/cineulima/busqueda/${filtro}`)
    const data = await response.json()
    setFiltro(data)

    if(data.msg === ""){
      navigate(data.path)
    }
    else{
      setNoEncontrado(true)
    }
    //se redirige a la pagina de la pelicula misma para ver funciones y otros
    
  }
  
  const filtrarContenido = (e) => {
      if (e.key === 'Enter') {
          navigate('hola');
      }
  };
  */

  return (
    <Container maxWidth="md" sx={{ marginTop: '40px', fontFamily: 'Roboto, sans-serif' }}>
      <p style={{ fontWeight: 'bold', fontSize: '12px', margin: '0' }}>Búsqueda</p>
      <Input
        placeholder="Buscar por nombre de película o sala"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
        //onKeyPress={filtrarContenido}
        fullWidth
      />

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
        {
          /*
          (() => {
              if (noEncontrado) {
                  return <Alert 
                      severity="error"
                      sx={ { mt : 2 } }>
                      No se encontraron resultados
                  </Alert>
              }
          })()
          */
        }
      </div>
    </Container>
  );
};

export default MainNavbar;

