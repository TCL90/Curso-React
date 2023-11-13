import React from 'react'
import data from '../data/data'
import Ubicacion from './Ubicacion'

function PaginaNe() {
  return (
    <div className='ubicaciones'>
        {data.filter(d => d.zona === 'no').map(d =>
        <Ubicacion key={d.nombre} nombre={d.nombre} situacion={d.situacion} imagen={d.imagen} />
    )}
    </div>
  )
}

export default PaginaNe
