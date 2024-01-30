import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'
import { Link } from "react-router-dom";

const CarouselPage = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className='d-block w-100 img-carousel'
                    src="https://cdn.atomix.vg/wp-content/uploads/2023/12/Diseno-sin-titulo-2023-12-19T155337.668.png" 
                    alt='img1'/>
                <h3 className='movie-name-r'>el nino y la garza</h3>
                <Link className="btn btn-outline-light button-buy-tickets" to={"/peliculas/nino-y-la-garza"}>
                    COMPRAR TICKETS
                </Link>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className='d-block w-100 img-carousel'
                    src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/213EA03F2F1EBD7974EF259CF3398E7C018E6D84E4E6A524A7C7A374322139B7/scale?width=1200&aspectRatio=1.78&format=jpeg" 
                    alt='img2'/>
                <h3 className='movie-name-r'>soul</h3>
                <Link className="btn btn-outline-light button-buy-tickets" to={"/peliculas/soul"}>
                    COMPRAR TICKETS
                </Link>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className='d-block w-100 img-carousel'
                    src="https://culture.org/wp-content/uploads/aquaman.webp" 
                    alt='img3'/>
                <h3 className='movie-name-r'>aquaman y el reino perdido</h3>
                <Link className="btn btn-outline-light button-buy-tickets" to={"/peliculas/aquaman-y-el-reino-perdido"}>
                    COMPRAR TICKETS
                </Link>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselPage