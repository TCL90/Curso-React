import React, {useContext} from 'react'
import {Contexto} from './contexto/Contexto'

function Pagina3() {
  const {color} = useContext(Contexto);
  return (
    <div className='componente' style={{backgroundColor: color}}>
      <h1>Pagina 3</h1>
      
    </div>
  )
}

export default Pagina3
