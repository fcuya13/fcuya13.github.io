import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Link } from "react-router-dom";

const CarouselPage = (props) => {

    return (
        <Carousel>
            {props.recomendaciones.map((movie, index) => (
                <Carousel.Item key={index}>
                    <img
                        className='d-block w-100 img-carousel'
                        src={movie.banner}
                        alt={movie.titulo}
                    />
                    <h3 className='movie-name-r'>{movie.titulo}</h3>
                    <Link className="btn btn-outline-light button-buy-tickets" to={`/peliculas/${movie.path}`}>
                        COMPRAR TICKETS
                    </Link>
                </Carousel.Item>
            ))}
        </Carousel>
    )
}

export default CarouselPage