import React from 'react'
import { useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom'
import Contexto from '../contexto/Contexto';

function Login() {
  const r = useRef();
  const {loguearme} = useContext(Contexto);
  const navegacion = useNavigate();
  const login = (e) => {
    loguearme(r.current.value);
    navegacion('/', {replace: true});
  }

  return (
    <div className='referencia'>
      <h1>Vive el País:</h1>
      <div className='formReferencia'>
        <label htmlFor='inputPais'>Referencia:</label>
        <div>
          <input ref={r} id="inputPais" type="text" placeholder='Referencia de tu billete...'/>
          <button onClick={(e) => login(e)}>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Login
