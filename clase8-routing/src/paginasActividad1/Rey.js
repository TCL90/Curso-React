import React from 'react'
import {useParams} from 'react-router-dom'

function Rey() {
  const dato = useParams();
  const imagen = `https://www.html6.es/img/rey_${dato.rey}`;
  return (
    <div className='rey'>
      <img src={imagen} alt={dato.rey} />
      <h1 className='red'>{dato.rey[0].toUpperCase() + dato.rey.slice(1)}</h1>
    </div>
  )
}

export default Rey
