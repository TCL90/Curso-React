import './Actividad1.css';
import React, {useState} from 'react';

function Actividad1() {
  const [nMensaje, setNMensaje] = useState(0)
  const [mensaje, setMensaje] = useState();
  const reyesGodos = [
    {
        nombre: "Ataúlfo",
        aficcion: "comer toros sin pelar",
    }, {
        nombre: "Recesvinto",
        aficcion: "leer a Hegel en arameo",
    }, {
        nombre: "Teodorico",
        aficcion: "la cría del escarabajo en almíbar",
    }
  ]
  
  const cambiaMensaje = () => {
    setMensaje(<h2><span>La aficción principal de</span> 
            <span className='reyNombre'> {reyesGodos[nMensaje].nombre} </span> 
            es <span className='reyAficcion'> {reyesGodos[nMensaje].aficcion}</span></h2>);
    if(nMensaje < reyesGodos.length - 1){
        setNMensaje((m) => m + 1)
    } else {
        setNMensaje(0);
    }
  }

  return (
      <>
        <button onClick={cambiaMensaje}>Ver siguiente</button>
        <div className='mensaje'>
            {mensaje}
        </div>
      </>
  );
}

export default Actividad1;
