import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from 'react-bootstrap/Carousel'
import "../App.css"
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <div>
        <Carousel>
          <Carousel.Item>
            <div className='recommend'>
              <img 
                className="d-block w-100 carousel"
                src="https://cdn.atomix.vg/wp-content/uploads/2023/12/Diseno-sin-titulo-2023-12-19T155337.668.png" alt="nino-y-la-garza" />

              <div className='row'>
                <div className='col-7 carousel-text'>
                  <h1 className='tittle-recommend'>EL NIÑO Y LA GARZA</h1>
                </div>
                <div className='col-5 carousel-buton'>
                  <Link className="btn btn-lg btn-outline-light buton-stile" to={"/peliculas/nino-y-la-garza"}>
                  COMPRAR TICKETS
                  </Link>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='recommend'>
              <img 
                className="d-block w-100 carousel" 
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5298bac0-b8bf-4c80-af67-725c1272dbb0/del7dse-fce37e1e-a46a-4d21-86e7-3e1160542565.jpg/v1/fill/w_1192,h_670,q_70,strp/pixar_s_soul_wallpaper_by_thekingblader995_del7dse-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcLzUyOThiYWMwLWI4YmYtNGM4MC1hZjY3LTcyNWMxMjcyZGJiMFwvZGVsN2RzZS1mY2UzN2UxZS1hNDZhLTRkMjEtODZlNy0zZTExNjA1NDI1NjUuanBnIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.cLjfqu0JTdzQxd6NU0xmFxzq2UoO8Nr5AxP1wcDr3EU"
                alt="soul" />

              <div className='row'>
                <div className='col-7 carousel-text'>
                  <h1 className='tittle-recommend'>Soul</h1>
                </div>
                <div className='col-5 carousel-buton'>
                  <Link className="btn btn-lg btn-outline-light buton-stile" to={"/peliculas/soul"}>
                  COMPRAR TICKETS
                  </Link>
                </div>
              </div>

            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='recommend'>
              <img 
                className="d-block w-100 carousel" 
                src="https://culture.org/wp-content/uploads/aquaman.webp" 
                alt="aquaman-2" />

              <div className='row'>
                <div className='col-7 carousel-text'>
                  <h1 className='tittle-recommend'>Aquaman el reino perdido</h1>
                </div>
                <div className='col-5 carousel-buton'>
                  <Link className="btn btn-lg btn-outline-light buton-stile" to={"/peliculas/aquaman-2"}>
                  COMPRAR TICKETS
                  </Link>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className='search-page'>
        <div className='principal-search'>
        <form>
          <label 
            htmlFor="busqueda" 
            className='form-label mb-0'
            id='search1-text'>Búsqueda</label>
          <input 
            type="text" 
            className='form-control navbar1 px-0'
            id='placeholder-text'
            placeholder='Busca por título, actores, actrices, género, etc'/>
        </form>
        </div>

        <div className='row'>
          <div className='col movies-or-cinemas mt-5 d-grid gap-2'>
            <Link 
              id='movies-buton'
              className="btn btn-warning orange-button" to={"/peliculas"}>
              PELÍCULAS
            </Link>
          </div>
          <div className='col movies-or-cinemas mt-5 d-grid gap-2'>
            <Link
              id='cinemas-buton' 
              className="btn btn-warning orange-button" to={"/cinemas"}>
              SALAS
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage