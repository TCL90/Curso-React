import React from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import Contexto from '../contexto/Contexto';

function Login() {
  const {loguearme} = useContext(Contexto);
  const navegacion = useNavigate();
  const login = () => {
    navegacion('/', {replace: true});
    loguearme('Tomás');
  }

  return (
    <div>
      <h1>Pantalla de Login</h1>
      <button onClick={login}>Login</button>
    </div>
  )
}

export default Login
