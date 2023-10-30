import React from 'react'
import './Actividad2.css'

function Actividad2({nombre}) {
  return (
    <div key={nombre} className='reyPair'>
      <p>{nombre}</p><button onClick={(e) => e.target.parentNode.remove()}>Borrar</button>
    </div>
  )
}

export default Actividad2
