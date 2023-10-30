import React, {useState} from 'react'
import './Actividad4.css'

function Actividad4({nombre}) {
  const [contador, setContador] = useState(0);
  return (
    <div key={nombre} className='reyContador'>
      <p className='rey'>{nombre}</p><p className='contador' onClick={() => setContador(contador+1)}>{contador}</p>
    </div>
  )
}

export default Actividad4
