import React from 'react'
import data from '../data/data'
import Ubicacion from './Ubicacion'

function PaginaCp() {
  return (
    <div className='ubicaciones'>
        {data.filter(d => d.zona === 'cp').map(d =>
        <Ubicacion key={d.nombre} nombre={d.nombre} situacion={d.situacion} imagen={d.imagen} />
    )}
    </div>
  )
}

export default PaginaCp
