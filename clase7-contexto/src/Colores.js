import React, {useContext} from 'react';
import {Contexto} from './contexto/Contexto';

function Colores() {
    const {setColor} = useContext(Contexto);

  return (
    <div className='colores'>
        <div className='color' onClick={() => {setColor("lightblue");}}></div>
        <div className='color' onClick={() => {setColor("violet");}}></div>
        <div className='color' onClick={() => {setColor("pink");}}></div>
        <div className='color' onClick={() => {setColor("lightgreen");}}></div>
    </div>
  )
}

export default Colores
