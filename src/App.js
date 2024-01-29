import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import MoviesPage from "./pages/MoviesPage"
import ReservaPage from "./pages/ReservaPage"
import SalaItemPage from "./pages/SalaItemPage";
import PeliculaItemPage from "./pages/PeliculaItemPage";
import DrawerPrueba from "./components/DrawerPrueba";

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
        <Route path="/peliculaItem" Component={PeliculaItemPage}/>
        <Route path="/test" Component={DrawerPrueba}/>
      </Routes>
    </div>
  );
}

export default App;
