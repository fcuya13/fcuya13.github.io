import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';

const MoviesPage = () => {
    return (
        <div className="pages-content">
            <div className="toolbox">
                <span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        className="bi bi-list list-icon"
                        viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                    </svg>
                </span>
                <span className="toolbox-text">
                    Salas de cine ULima
                </span>

                <span>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-star-fill start-icon"
                        viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" /></svg>

                    <svg xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-star-fill start-icon"
                        viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-star-fill start-icon"
                        viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-star-fill start-icon"
                        viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-star-fill start-icon"
                        viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                </span>
            </div>

            <div className="row movies-body">
                <div className="col-md-2">
                    <img
                        src="https://tierrafilms.pe/images/logos/ULIMA.png"
                        className="logo-university"
                        alt="ULima-logo"/>
                    
                    <input
                        type="text"
                        className='form-control navbar2 px-2'
                        placeholder='Busca'/>

                    <div className="click-pages">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star-fill pages-icon"
                            viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>

                        <Link
                            className="link-pages"
                            to={"/peliculas"}>
                            Películas
                        </Link>
                    </div>

                    <div className="click-pages">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star-fill pages-icon"
                            viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>

                        <Link
                            className="link-pages"
                            to={"/cinemas"}>
                            Salas
                        </Link>
                    </div>
                </div>

                <div className="col-md-10 movies-content">
                    <h2 className="tittle-movies-or-cinemas">Películas</h2>

                    <div className="available">
                        <div className="row padding-cards">
                            <div className="col margin-cards">
                                
                                <Card style={{ width: '20rem' }}>
                                    <Link to={"/peliculas/Beekeper-Sentencia-de-Muerte"}>
                                        <Card.Img variant="top" src="https://644fd82233b4b1638143.cdn6.editmysite.com/uploads/b/644fd82233b4b1638143ff6d8adf1c3dd20d5e76f73b0ebbaaab6118dfca9953/icons8-picture-384_1685843925.png?width=2400&optimize=medium" className="img-card" />
                                    </Link>
                                    <Card.Body>
                                        <p className="tag-info">1hrs 50 min</p>
                                        <p className="description">Beekeper Sentencia de Muerte</p>

                                        <div>
                                            <span className="tag">Acción</span>
                                            <span className="tag">+14</span>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>

                            <div className="col">
                                <Card style={{ width: '20rem' }}>
                                    <Link to={"/peliculas/El-Niño-y-la-Garza"}>
                                        <Card.Img variant="top" src="https://644fd82233b4b1638143.cdn6.editmysite.com/uploads/b/644fd82233b4b1638143ff6d8adf1c3dd20d5e76f73b0ebbaaab6118dfca9953/icons8-picture-384_1685843925.png?width=2400&optimize=medium" className="img-card" />
                                    </Link>
                                    <Card.Body>
                                        <p className="tag-info">2hrs 10 min</p>
                                        <p className="description">El Niño y la Garza</p>

                                        <div>
                                            <span className="tag">Anime</span>
                                            <span className="tag">APT</span>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>

                            <div className="col">
                                <Card style={{ width: '20rem' }}>
                                    <Link to={"/peliculas/Jack-en-la-Caja-Maldita-3"}>
                                        <Card.Img variant="top" src="https://644fd82233b4b1638143.cdn6.editmysite.com/uploads/b/644fd82233b4b1638143ff6d8adf1c3dd20d5e76f73b0ebbaaab6118dfca9953/icons8-picture-384_1685843925.png?width=2400&optimize=medium" className="img-card" />
                                    </Link>
                                    <Card.Body>
                                        <p className="tag-info">1hrs 40 min</p>
                                        <p className="description">Jack en la Caja Maldita 3</p>

                                        <div>
                                            <span className="tag">Terror</span>
                                            <span className="tag">+14</span>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>

                    <div className="available">
                        <div className="row padding-cards">
                            <div className="col margin-cards">
                                <Card style={{ width: '20rem' }}>
                                    <Link to={"/peliculas/La-Super-Familia"}>
                                        <Card.Img variant="top" src="https://644fd82233b4b1638143.cdn6.editmysite.com/uploads/b/644fd82233b4b1638143ff6d8adf1c3dd20d5e76f73b0ebbaaab6118dfca9953/icons8-picture-384_1685843925.png?width=2400&optimize=medium" className="img-card" />
                                    </Link>
                                    <Card.Body>
                                        <p className="tag-info">1hrs 20 min</p>
                                        <p className="description">La Super Familia</p>

                                        <div>
                                            <span className="tag">Familiar</span>
                                            <span className="tag">APT</span>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>

                            <div className="col">
                                <Card style={{ width: '20rem' }}>
                                    <Link to={"/peliculas/Soul"}>
                                        <Card.Img variant="top" src="https://644fd82233b4b1638143.cdn6.editmysite.com/uploads/b/644fd82233b4b1638143ff6d8adf1c3dd20d5e76f73b0ebbaaab6118dfca9953/icons8-picture-384_1685843925.png?width=2400&optimize=medium" className="img-card" />
                                    </Link>
                                    <Card.Body>
                                        <p className="tag-info">1hrs 40 min</p>
                                        <p className="description">Soul</p>

                                        <div>
                                            <span className="tag">Animación</span>
                                            <span className="tag">APT</span>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>

                            <div className="col">
                                <Card style={{ width: '20rem' }}>
                                    <Link to={"/peliculas/Alice-La-Gemela-del-Diablo"}>
                                        <Card.Img variant="top" src="https://644fd82233b4b1638143.cdn6.editmysite.com/uploads/b/644fd82233b4b1638143ff6d8adf1c3dd20d5e76f73b0ebbaaab6118dfca9953/icons8-picture-384_1685843925.png?width=2400&optimize=medium" className="img-card" />
                                    </Link>
                                    <Card.Body>
                                        <p className="tag-info">1hrs 50 min</p>
                                        <p className="description">Alice: La Gemela del Diabl0</p>

                                        <div>
                                            <span className="tag">Terror</span>
                                            <span className="tag">+14</span>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>   
                    </div>

                    <div className="available">
                        <div className="row padding-cards">
                            <div className="col margin-cards">
                                <Card style={{ width: '20rem' }}>
                                    <Link to={"/peliculas/Aquaman-y-el-Reino-perdido"}>
                                        <Card.Img variant="top" src="https://644fd82233b4b1638143.cdn6.editmysite.com/uploads/b/644fd82233b4b1638143ff6d8adf1c3dd20d5e76f73b0ebbaaab6118dfca9953/icons8-picture-384_1685843925.png?width=2400&optimize=medium" className="img-card" />
                                    </Link>
                                    <Card.Body>
                                        <p className="tag-info">2hrs 10 min</p>
                                        <p className="description">Aquaman y el Reino perdido</p>

                                        <div>
                                            <span className="tag">Acción</span>
                                            <span className="tag">+14</span>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>

                            <div className="col">
                                <Card style={{ width: '20rem' }}>
                                    <Link to={"/peliculas/El-Juego-de-la-Muerte"}>
                                        <Card.Img variant="top" src="https://644fd82233b4b1638143.cdn6.editmysite.com/uploads/b/644fd82233b4b1638143ff6d8adf1c3dd20d5e76f73b0ebbaaab6118dfca9953/icons8-picture-384_1685843925.png?width=2400&optimize=medium" className="img-card" />
                                    </Link>
                                    <Card.Body>
                                        <p className="tag-info">1hrs 40 min</p>
                                        <p className="description">El Juego de la Muerte</p>

                                        <div>
                                            <span className="tag">Terror</span>
                                            <span className="tag">+14</span>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>

                            <div className="col">
                                <Card style={{ width: '20rem' }}>
                                    <Link to={"/peliculas/Hablando-Huevadas-Hijo-D..."}>
                                        <Card.Img variant="top" src="https://644fd82233b4b1638143.cdn6.editmysite.com/uploads/b/644fd82233b4b1638143ff6d8adf1c3dd20d5e76f73b0ebbaaab6118dfca9953/icons8-picture-384_1685843925.png?width=2400&optimize=medium" className="img-card" />
                                    </Link>
                                    <Card.Body>
                                        <p className="tag-info">1hrs</p>
                                        <p className="description">Hablando Huevadas: Hijo D...</p>

                                        <div>
                                            <span className="tag">Comedia</span>
                                            <span className="tag">+14</span>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>   
                    </div>

                </div>

            </div>

        </div>
    )
}

export default MoviesPage