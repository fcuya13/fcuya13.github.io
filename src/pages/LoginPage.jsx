import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");

  document.body.style.background = "rgba(250, 117, 37, 0.30)";

  return (
    <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
      <div className="row mb-5">
        <h1 className="login-header">SALAS DE CINE ULIMA</h1>
      </div>

      <div className="row mb-5" style={{ width: "550px" }}>
        <div
          className="container rounded-1 p-3"
          style={{ background: "white" }}
        >
          <form>
            <div className="mb-3">
              <label htmlFor="correo" className="form-label">
                Correo
              </label>
              <input
                type="email"
                className="form-control"
                id="correo"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="d-grid gap-2">
              <Link className="btn btn-warning orange-button" to={"/"}>
                INGRESAR
              </Link>
              <Link className="btn btn-light orange-outline-button" to={"/registro"}>
                REGISTRARSE
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
