import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import MoviesPage from "./pages/MoviesPage"
import ReservaPage from "./pages/ReservaPage"
import SalaItemPage from "./pages/SalaItemPage";
import PeliculaItemPage from "./pages/PeliculaItemPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={HomePage}/>
        <Route path="/login" Component={LoginPage}/>
        <Route path="/registro" Component={RegisterPage}/>
        <Route path="/peliculas" Component={MoviesPage}/>
        <Route path="/reserva" Component={ReservaPage}/>
        <Route path="/salaItem" Component={SalaItemPage}/>
        <Route path="/peliculas/beekeeper-sentencia-de-muerte" Component={PeliculaItemPage}/>
      </Routes>
    </div>
  );
}

export default App;
