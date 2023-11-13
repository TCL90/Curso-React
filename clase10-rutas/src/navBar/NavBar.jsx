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
        <NavLink to="contenido1">Contenido 1</NavLink>
        <NavLink to="contenido2">Contenido 2</NavLink>
        <NavLink to="contenido3">Contenido 3</NavLink>
        <button onClick={login}>Logout</button>
      </nav>
    </div>
  )
}

export default NavBar
