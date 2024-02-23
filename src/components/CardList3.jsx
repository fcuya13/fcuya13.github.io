import Cards3 from "./Cards3"
import {Grid} from "@mui/material"

const CardList3 = (props) => {
    return (
        <Grid
            container
            sx={{
                marginBottom: '25px', justifyContent: {xs: "center"}
            }}>
            {
                props.reservas.map((e) => {
                    return (
                        <Cards3
                            titulo={e.titulo}
                            thumbnail={e.thumbnail}
                            fecha={e.fecha}
                            hora={e.hora}
                            sala={e.sala}
                            cantidad={e.entradas}
                        />
                    )
                })
            }
        </Grid>
    )
}

export default CardList3
