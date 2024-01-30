import {Navigate, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import MoviesPage from "./pages/MoviesPage"
import ReservaPage from "./pages/ReservaPage"
import PeliculaItemPage from "./pages/PeliculaItemPage";
import SalasPage from "./pages/SalasPage";
import SalaItemPage from "./pages/SalaItemPage";

function App() {
  return (
    <div>
      <Routes>
        <Route
            path="*"
            element={<Navigate to="/login" replace={true} />}
        />
        <Route path="/home" Component={HomePage}/>
        <Route path="/login" Component={LoginPage}/>
        <Route path="/registro" Component={RegisterPage}/>
        <Route path="/peliculas" Component={MoviesPage}/>
        <Route path="/reserva" Component={ReservaPage}/>
        <Route path="/peliculas/beekeeper-sentencia-de-muerte" Component={PeliculaItemPage}/>
        <Route path="/salas" Component={SalasPage}/>
        <Route path="/salas/sala-a" Component={SalaItemPage}/>
      </Routes>
    </div>
  );
}

export default App;
