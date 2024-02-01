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
                    src="https://m.media-amazon.com/images/S/aplus-media/vc/5be5c13a-ff75-4775-9802-774fdb17be94.__CR0,0,970,300_PT0_SX970_V1___.jpg" 
                    alt='img1'/>
                <h3 className='movie-name-r'>like a boss</h3>
                <Link className="btn btn-outline-light button-buy-tickets" to={"/peliculas/like-a-boss"}>
                    COMPRAR TICKETS
                </Link>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className='d-block w-100 img-carousel'
                    src="https://i.blogs.es/5ce45e/fgptzkl3xvd3rewxfyrmkshnaa/1366_2000.jpeg" 
                    alt='img2'/>
                <h3 className='movie-name-r'>dolittle</h3>
                <Link className="btn btn-outline-light button-buy-tickets" to={"/peliculas/dolittle"}>
                    COMPRAR TICKETS
                </Link>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className='d-block w-100 img-carousel'
                    src="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABTB6wzSPf-W17mhIsfrn7CvnXNi0Y6BycOroPfjBMxDODSiYx_AC6D6u96PzCn-mdKm45lRZ8-RTqjz4LY3Bs2fdZTwR7fwRWUeU.jpg?r=05a" 
                    alt='img3'/>
                <h3 className='movie-name-r'>a fall from grace</h3>
                <Link className="btn btn-outline-light button-buy-tickets" to={"/peliculas/a-fall-from-grace"}>
                    COMPRAR TICKETS
                </Link>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselPage