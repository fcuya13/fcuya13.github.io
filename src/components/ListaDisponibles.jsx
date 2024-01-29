import Disponibles from "./Disponibles"

const ListaDisponibles = (props) => {

    return <div>
        {
            props.listaDisponibles.map((elem) => {
                return <Disponibles
                    avatarTitulo= {elem.avatarTitulo}
                    nombreDisponible= {elem.nombreDisponible}
                    descripcionDisponible= {elem.descripcionDisponible}
                    horario1= {elem.horario1}
                    horario2= {elem.horario2}
                />
            })
        }
    </div>
}

export default ListaDisponibles