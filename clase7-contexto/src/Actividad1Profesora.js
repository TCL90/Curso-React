import React, {useContext} from 'react'
import {ContextoActividad1} from './contexto/ContextoActividad1'

function Actividad1Profesora() {
    const {valor} = useContext(ContextoActividad1);
    const idioma = valor[3].idioma;
    const imagen = `../images/${valor[idioma].foto}`;
    
  return (
    <div className='profesora'>
        <h1>{valor[idioma].boton1}</h1>
        <img className='imagen' src={imagen} alt="Profesora"/>
        <p className='nombre'>{valor[idioma].nombre}</p>
    </div>
  )
}

export default Actividad1Profesora
