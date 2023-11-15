import React from 'react'
import { useNavigate } from 'react-router-dom';

function Ganado() {
  const navegacion = useNavigate();
  const volverAJugar = () => {
    navegacion("/ahorcado");
  }

  return (
    <div className='final'>
      <h1>!Felicidades, Has ganado!</h1>
      <button className="volver" onClick={volverAJugar}>Volver a Jugar</button>
    </div>
  )
}

export default Ganado
