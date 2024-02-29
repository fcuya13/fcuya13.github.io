import {Backdrop, CircularProgress, Container, Grid, Typography} from "@mui/material"
import PageLayout from "../components/PageLayout"
import SalasBody from "../components/SalasBody"
import {useEffect, useState} from "react"
import {useLocation, useNavigate} from "react-router-dom"
import {Helmet} from "react-helmet";

const SalasPage = () => {
    const [filtro, setFiltro] = useState('')
    const [salasData, setSalasData] = useState([])
  const location = useLocation()
  const {state} = location
  const salas = state ? state.filtro : []
    const [loading, setLoading] = useState(false)
    const [isInitialLoad, setIsInitialLoad] = useState(true)
    const navigate = useNavigate()

    const filtrarSalas = async () => {
        if (isInitialLoad){
            setLoading(true)
            setIsInitialLoad(false)
        }
        const response = await fetch(`https://cineulima.azurewebsites.net/cineulima/salas?filtro=${filtro}`)
        const data = await response.json()
        setSalasData(data)
        setLoading(false)
    }

    useEffect(() => {
        if (filtro) {
            filtrarSalas(filtro)
        } else if (salas.length > 0) {
            setSalasData(salas)
        }
        else {
            filtrarSalas('')
        }
    }, [filtro])

  return <>
      <Helmet>
          <title>Salas | Cine Ulima</title>
      </Helmet>
    <PageLayout onSearchChange={setFiltro}>
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
        <SalasBody salasData = { salasData }/>
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

export default SalasPage
