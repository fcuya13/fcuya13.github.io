import Disponibles from "./Disponibles"

const ListaDisponibles = (props) => {

    return <div>
        {
            props.listaDisponibles.map((elem) => {
                return <Disponibles
                    siglas= {elem.siglas}
                    name= {elem.nombre}
                    descripcionDisponible= {elem.direccion}
                    ventanas={elem.ventanas}
                    pelicula={props.pelicula}
                />
            })
        }
    </div>
}

export default ListaDisponibles