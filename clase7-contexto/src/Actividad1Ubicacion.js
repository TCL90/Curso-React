import React, {useContext} from 'react';
import { ContextoActividad1 } from './contexto/ContextoActividad1';

function Actividad1Ubicacion() {
  const {valor} = useContext(ContextoActividad1);
  const idioma = valor[3].idioma;
  return (
    <div className='ubicacion'>
      <h1 className='titulo-ubicacion'>{valor[idioma].boton2}</h1>
      <p className='contenido-ubicacion'>{valor[idioma].direccion}</p>
    </div>
  )
}

export default Actividad1Ubicacion
