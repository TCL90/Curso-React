import React from 'react'
import {NavLink} from 'react-router-dom'

function Nav() {
  return (
      <nav>
        <NavLink to="/" className={({isActive}) => isActive ? "activado" : null}>Página 1</NavLink>
        <NavLink to="/pagina2" className={({isActive}) => isActive ? "activado" : null}>Página 2</NavLink>
        <NavLink to="/pagina3" className={({isActive}) => isActive ? "activado" : null}>Página 3</NavLink>
        <NavLink to="/pagina4/G" className={({isActive}) => isActive ? "activado" : null}>Página 4</NavLink>
      </nav>
  )
}

export default Nav
