import React, {useContext, useState} from 'react';
import Actividad1Profesora from './Actividad1Profesora';
import Actividad1Ubicacion from './Actividad1Ubicacion';
import {ContextoActividad1} from './contexto/ContextoActividad1';

function Actividad1Pagina() {
  const {valor} = useContext(ContextoActividad1);
  const idioma = valor[3].idioma;
  const [boton1, setBoton1] = useState(false);
  const [boton2, setBoton2] = useState(false);

  function handle1() {
    setBoton1(e => !e);
    setBoton2(false);
  }

  function handle2() {
    setBoton2(e => !e);
    setBoton1(false);
  }

  return (
    <>
        <div className='contenido'>
            <h1 className='titulo'>{valor[idioma].titulo}</h1>
            <h2 className='cuerpo'>{valor[idioma].texto}</h2>
        </div>
        <div className='botones'>
            <button className='foto' onClick={handle1}>{valor[idioma].boton1}</button>
            <button className='lugar' onClick={handle2}>{valor[idioma].boton2}</button>
        </div>

        {boton1 === true ? 
            <Actividad1Profesora /> : null}
        {boton2 === true ?
        <Actividad1Ubicacion /> : null}
    </>
  )
}

export default Actividad1Pagina
