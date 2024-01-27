import MovieRowCards from "./MovieRowCards"

const MoviesBody = () => {
    const moviesRow1 = [
        {
            inf: "1hrs 50min",
            tittle: "Beekeeper Sentencia de Muerte",
            label1: "Acción",
            label2: "+14",
            path : "/peliculas/beekeeper-sentencia-de-muerte"
        },
        {
            inf: "2hrs 10 min",
            tittle: "El Niño y la Garza",
            label1: "Anime",
            label2: "APT",
            path : "/peliculas/nino-y-la-garza"
        },
        {
            inf: "1hrs 40min",
            tittle: "Jack en la Caja Maldita 3",
            label1: "Terror",
            label2: "+14",
            path : "/peliculas/jack-en-la-caja-maldita-3"
        },
    ]

    const moviesRow2 = [
        {
            inf: "1hrs 20min",
            tittle: "La Super Familia",
            label1: "Familiar",
            label2: "APT",
            path : "/peliculas/la-super-familia"
        },
        {
            inf: "1hrs 40min",
            tittle: "Soul",
            label1: "Animación",
            label2: "APT",
            path : "/peliculas/soul"
        },
        {
            inf: "1hrs 50min",
            tittle: "Alice: La Gemela del Diablo",
            label1: "Terror",
            label2: "+14",
            path : "/peliculas/alice-la-gemela-del-diablo"
        },
    ]

    const moviesRow3 = [
        {
            inf: "2hrs 10min",
            tittle: "Aquaman y el Reino Perdido",
            label1: "Acción",
            label2: "+14",
            path : "/peliculas/aquaman-y-el-reino-perdido"
        },
        {
            inf: "1hrs 40min",
            tittle: "El Juego de la Muerte",
            label1: "Terror",
            label2: "+14",
            path : "/peliculas/juego-de-la-muerte"
        },
        {
            inf: "1hrs",
            tittle: "Hablando Huevadas: Hijo D...",
            label1: "Comedia",
            label2: "+14",
            path : "/peliculas/hablando-huevadas-pelicula"
        },
    ]


    return <div style={ { marginLeft: '30px', marginRight: '10px'}}>
        <MovieRowCards row = { moviesRow1 }/>
        <MovieRowCards row = { moviesRow2 }/>
        <MovieRowCards row = { moviesRow3 }/>
    </div>
}

export default MoviesBody
