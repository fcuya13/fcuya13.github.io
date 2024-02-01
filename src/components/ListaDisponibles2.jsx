import Disponibles2 from "./Disponibles2"

const ListaDisponibles2 = (props) => {

    return <div>
        {
            props.listaDisponibles.map((elem) => {
                return <Disponibles2
                    siglas= {elem.siglas}
                    name= {elem.title}
                    descripcionDisponible= {elem.extract}
                    available_times={elem.available_times}
                    sala={props.sala}
                    pelicula={elem}
                />
            })
        }
    </div>
}

export default ListaDisponibles2