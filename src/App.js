import {Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import MoviesPage from "./pages/MoviesPage"
import ReservaPage from "./pages/ReservaPage"
import PeliculaItemPage from "./pages/PeliculaItemPage";
import SalasPage from "./pages/SalasPage";
import SalaItemPage from "./pages/SalaItemPage";
import RecuperaPage from "./pages/RecuperaPage";
import MisReservasPage from "./pages/MisReservasPage"
import ErrorPage from "./pages/ErrorPage"

const App = () => {
    return (
        <Routes>
            <Route
                path="*"
                element={<ErrorPage img={"https://admiral.digital/wp-content/uploads/2023/08/404_page-not-found-1024x576.png"}/>}
            />
                <Route path="/error/500" element={<ErrorPage
                    img={"https://seo-hacker.com/wp-content/uploads/2023/07/Blog-Cover-Fixing-a-500-Internal-Server-Error-on-Your-Site-01.png"}/>} />
            <Route path="" element={<LoginPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/registro" element={<RegisterPage/>}/>
            <Route path="/home" element={<HomePage/>}/>
            <Route path="/peliculas" element={<MoviesPage/>}/>
            <Route path="/reserva" element={<ReservaPage/>}/>
            <Route path="/peliculas/:path" element={<PeliculaItemPage/>}/>
            <Route path="/salas" element={<SalasPage/>}/>
            <Route path="/salas/:path" element={<SalaItemPage/>}/>
            <Route path="/recupera" element={<RecuperaPage/>}/>
            <Route path="/misreservas" element={<MisReservasPage/>}/>
        </Routes>
    );
};

export default App;
