import React, {useContext} from 'react'
import {Contexto} from './contexto/Contexto'

function Pagina2() {
  const {color} = useContext(Contexto);
  return (
    <div className='componente' style={{backgroundColor: color}}>
      <h1>Pagina 2</h1>
      
    </div>
  )
}

export default Pagina2
