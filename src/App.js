import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={HomePage}/>
        <Route path="/login" Component={LoginPage}/>
        <Route path="/registro" Component={RegisterPage}/>
      </Routes>
    </div>
  );
}

export default App;
