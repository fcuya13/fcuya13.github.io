import CardList from "./CardList"

const MoviesBody = () => {
    const movieList = [
        {
            inf: "1hrs 50min",
            tittle: "Beekeeper Sentencia de Muerte",
            labels: ["Acción","+14"],
            path : "/peliculas/beekeeper-sentencia-de-muerte"
        },
        {
            inf: "2hrs 10 min",
            tittle: "El Niño y la Garza",
            labels: ["Anime", "APT"],
            path : "/peliculas/nino-y-la-garza"
        },
        {
            inf: "1hrs 40min",
            tittle: "Jack en la Caja Maldita 3",
            labels: ["Terror","+14"],
            path : "/peliculas/jack-en-la-caja-maldita-3"
        },
        {
            inf: "1hrs 20min",
            tittle: "La Super Familia",
            labels: ["Familiar","APT"],
            path : "/peliculas/la-super-familia"
        },
        {
            inf: "1hrs 40min",
            tittle: "Soul",
            labels: ["Animación","APT"],
            path : "/peliculas/soul"
        },
        {
            inf: "1hrs 50min",
            tittle: "Alice: La Gemela del Diablo",
            labels: ["Terror", "+14"],
            path : "/peliculas/alice-la-gemela-del-diablo"
        },
        {
            inf: "2hrs 10min",
            tittle: "Aquaman y el Reino Perdido",
            labels: ["Acción","+14"],
            path : "/peliculas/aquaman-y-el-reino-perdido"
        },
        {
            inf: "1hrs 40min",
            tittle: "El Juego de la Muerte",
            labels: ["Terror", "+14"],
            path : "/peliculas/juego-de-la-muerte"
        },
        {
            inf: "1hrs",
            tittle: "Hablando Huevadas: Hijo D...",
            labels: ["Comedia", "+14"],
            path : "/peliculas/hablando-huevadas-pelicula"
        },
    ]

    return <div style={ { marginLeft: '30px', marginRight: '10px'}}>
        <CardList list={movieList} size={4} />
    </div>
}

export default MoviesBody
