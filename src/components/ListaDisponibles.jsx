import Disponibles from "./Disponibles"

const ListaDisponibles = (props) => {

    return <div>
        {
            props.listaDisponibles.map((elem) => {
                return <Disponibles
                    siglas= {elem.siglas}
                    name= {elem.name}
                    descripcionDisponible= "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                    available_times={elem.available_times}
                />
            })
        }
    </div>
}

export default ListaDisponibles