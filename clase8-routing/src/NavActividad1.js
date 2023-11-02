import React from 'react'
import {NavLink} from 'react-router-dom'

function Nav() {
  const reyes = ["atanagildo", "ataulfo", "ervigio", "leovigildo", "recesvinto", "sisebuto"];
  return (
    <nav>
        <NavLink to="/" className={({isActive}) => isActive ? "activado" : null}>Reyes</NavLink>
        {reyes.map(rey => 
            <NavLink key={rey} to={"/" + rey} className={({isActive}) => isActive ? "activado" : null}>
                {rey[0].toUpperCase() + rey.slice(1)}
            </NavLink>
            )
        }
      </nav>
  )
}

export default Nav
