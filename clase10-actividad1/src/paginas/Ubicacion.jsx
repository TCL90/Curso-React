import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Contexto from '../contexto/Contexto';

function Ubicacion({nombre, situacion, imagen}) {
  const navegacion = useNavigate();
  const {lugares} = useContext(Contexto);

  return (
    <div className='ubicacion'>
        <p className='titulo'>{nombre}</p>
        <p>{situacion}</p>
        <img alt={nombre} src={`./images/${imagen}`}/>
        <div className='barraInferior'>
          <button onClick={() => navegacion(`/destino/${nombre}`)}>Más Info</button>
          <p className={lugares.filter(l => l[0] === nombre).length !== 0 ? 'active': ''}/>
        </div>
    </div>
  )
}

export default Ubicacion
