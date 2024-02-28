import {Backdrop, CircularProgress, Container, Grid, Typography} from "@mui/material"
import MovieBody from "../components/MovieBody"
import PageLayout from "../components/PageLayout"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import {Helmet} from "react-helmet";

const MoviesPage = () => {
  const [filtro, setFiltro] = useState('')
  const [moviesData, setMoviesData] = useState([])
  const location = useLocation()
  const {state} = location
  const movies = state ? state.filtro : []
  const [loading, setLoading] = useState(false)
    const [isInitialLoad, setIsInitialLoad] = useState(true)

  const filtrarPeliculas = async () => {
      if (isInitialLoad){
          setLoading(true)
          setIsInitialLoad(false)
      }
      const response = await fetch(`https://cineulima.azurewebsites.net/cineulima/peliculas?filtro=${filtro}`)
    const data = await response.json()
    setMoviesData(data)
      setLoading(false)
  }

  useEffect(() => {
    if (filtro) {
      filtrarPeliculas(filtro)

    } else if (movies.length > 0) {
      setMoviesData(movies)
    }
    else {
      filtrarPeliculas('')
    }
  }, [filtro])

  return <>
      <Helmet>
          <title>Películas | Cine Ulima</title>
      </Helmet>
      <PageLayout onSearchChange={setFiltro}>
        <Grid container sx={{ fontFamily: 'Roboto, sans-serif' }}>
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
            <MovieBody moviesData={moviesData} />
          </Container>
        </Grid>
          <Backdrop
              sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
              open={loading}
          >
              <CircularProgress color="inherit"/>
          </Backdrop>
      </PageLayout>
  </>
}

export default MoviesPage
