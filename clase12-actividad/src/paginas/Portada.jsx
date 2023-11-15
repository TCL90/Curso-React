import React from 'react'
import { useNavigate } from 'react-router-dom';

function Portada() {
  const navegacion = useNavigate();

  return (
    <div>
      <h1>Bienvenido/a</h1>
      <button onClick={() => navegacion("/ahorcado")}>Jugar</button>
    </div>
  )
}

export default Portada
