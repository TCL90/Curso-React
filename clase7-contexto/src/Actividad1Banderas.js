import React, {useContext} from 'react'
import franciaImg from './images/francia.png'
import spainImg from './images/spain.jpg'
import ukImg from './images/uk.png'
import { ContextoActividad1 } from './contexto/ContextoActividad1'

function Actividad1Banderas() {
  const {valor, setValor} = useContext(ContextoActividad1);

  const cambio = (i) => {
    setValor(
      valor.map((dato, indice) => indice === 3 ? {...dato, idioma:i} : {...dato})
    );
  }

  return (
    <div className='banderas'>
      <div className='bandera' onClick={() => cambio(0)}><img src={spainImg} alt="España"/></div>
      <div className='bandera' onClick={() => cambio(1)}><img src={ukImg} alt="UK"/></div>
      <div className='bandera' onClick={() => cambio(2)}><img src={franciaImg} alt="France"/></div>
      
    </div>
  )
}

export default Actividad1Banderas
