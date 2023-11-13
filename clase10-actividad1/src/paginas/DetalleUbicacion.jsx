import React, {useState, useContext} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import data from '../data/data';
import Contexto from '../contexto/Contexto';

function DetalleUbicacion() {
  const dato = useParams();
  var destino = data.find(ubi => ubi.nombre === dato.destino);
  const myStyle = {
    backgroundRepeat: "no-repeat",
    backgroundImage: `url('../images/${destino.imagen}')`,
  };
  const navegacion = useNavigate();
  const {addLugar, removeLugar, lugares} = useContext(Contexto);
  const [toggle, setToggle] = useState(lugares.filter(l => l[0] === destino.nombre).length === 0);

  const contratar = (e) => {
    if (toggle) {
      e.target.innerText = "Anular";
      e.target.style.backgroundColor = "red";
      addLugar(destino.nombre, destino.precio);

    } else {
      e.target.innerText = "Contratar";
      e.target.style.backgroundColor = "green";
      removeLugar(destino.nombre, destino.precio);

    }
    setToggle(!toggle);
  }

  return (
    <div className='ubicacionDetalle'>
      <h1>{destino.nombre}</h1>
      <p>{destino.situacion}</p>
      <div className='imagen' style={myStyle}>
        <div className='precio'>
          <p>{destino.precio}$</p>
      </div>
      <div>
        <button style={toggle ? {"backgroundColor" : "green"} : {"backgroundColor" : "red"}}
        onClick={(e) => contratar(e)}>{toggle ? 'Contratar' : "Anular"}</button>
        <button className='volver' onClick={() => navegacion(-1)}>Volver</button>
      </div>
      </div>
    </div>
  )
}

export default DetalleUbicacion
