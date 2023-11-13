import React from 'react'
import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Contexto from '../contexto/Contexto';

function NavBar() {
  const {desloguearme} = useContext(Contexto);
  const navegacion = useNavigate();
  const login = () => {
    desloguearme();
    navegacion('/login', {replace: true});
  }

  return (
    <div>
      <nav>
        <div className='enlacesContenido'>
          <NavLink className={({isActive}) => isActive ? "activado" : null} to="cp">Capital y Patagonia</NavLink>
          <NavLink className={({isActive}) => isActive ? "activado" : null} to="ne">Norte y Este</NavLink>
          <NavLink className={({isActive}) => isActive ? "activado" : null} to="ruta">Ruta</NavLink>
        </div>
        <button onClick={login}>Logout</button>
      </nav>
    </div>
  )
}

export default NavBar
