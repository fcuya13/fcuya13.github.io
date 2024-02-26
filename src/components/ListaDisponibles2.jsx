import Disponibles2 from "./Disponibles2"

const ListaDisponibles2 = (props) => {

    return <div>
        {
            props.listaDisponibles.map((elem) => {
                return <Disponibles2
                    siglas= {elem.siglas}
                    name= {elem.nombre}
                    descripcionDisponible= {elem.descripcion}
                    available_times={elem.ventanas}
                    sala={props.sala}
                    pelicula={elem.pelicula_id}
                />
            })
        }
    </div>
}

export default ListaDisponibles2