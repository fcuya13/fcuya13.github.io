import React, { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'


const RegisterPage = () => {

    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [correo, setCorreo] = useState("")
    const [password, setPassword] = useState("")
    const [passConf, setPassConf] = useState("")
    
    const imprimirValores = () => {
        console.log({
            nombre, apellido, correo, password, passConf, same: password === passConf
        })
    }

    document.body.style.background = "rgba(250, 117, 37, 0.30)";

    return (
      <div className='vh-100 d-flex flex-column justify-content-center align-items-center'>
        
        <div className='row mb-3' >
          <h1 className='login-header'>SALAS DE CINE ULIMA</h1>
        </div>
  
        <div className='row mb-3' style={{width: "550px"}}>
        <div className='container rounded-1 p-3' style={{background: "white"}}>
          <form>
          <div className="mb-3">
              <label htmlFor="nombre" className="form-label">Nombre</label>
              <input type="text" className="form-control" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
            </div>
            <div className="mb-3">
              <label htmlFor="apellido" className="form-label">Apellidos</label>
              <input type="text" className="form-control" id="apellido" value={apellido} onChange={(e) => setApellido(e.target.value)}/>
            </div>
          <div className="mb-3">
              <label htmlFor="correo" className="form-label">Correo</label>
              <input type="email" className="form-control" id="correo" value={correo} onChange={(e) => setCorreo(e.target.value)}/>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Contraseña</label>
              <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className="mb-3">
              <label htmlFor="passwordConfirm" className="form-label">Confirmar Contraseña</label>
              <input type="password" className="form-control" id="passwordConfirm" value={passConf} onChange={(e) => setPassConf(e.target.value)}/>
            </div>
            <div className="d-grid gap-2">
              <button className="btn btn-primary orange-button" type="button" onClick={imprimirValores}>INGRESAR</button>
            </div>
          </form>
        </div>
          </div>
      </div>
    )
}

export default RegisterPage