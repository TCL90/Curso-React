import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Contexto from '../contexto/Contexto';

function Final() {
  const navegacion = useNavigate();
  const { correcta } = useContext(Contexto);
  const volverAJugar = () => {
    navegacion("/ahorcado");
  }

  return (
    <div className='final'>
      <h1>!Lo siento! Has perdido</h1>
      <h1>La respuesta correcta era {correcta}</h1>
      <button onClick={volverAJugar} className='volver'>Volver A Jugar</button>
    </div>
  )
}

export default Final
