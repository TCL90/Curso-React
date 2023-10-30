import React from 'react';
import "./Actividad1_2.css";

function Actividad1({nombre, vacasComidas, reinado}) {
  const ruta = `https://www.html6.es/img/rey_`;
  const img = `${ruta}${nombre.toLowerCase()}.png`;
  return (
    <div key={nombre} className='cardRey'>
      <p>
        <span className='nombreRey'>
            {nombre.toUpperCase() }
        </span> ha comido {vacasComidas} vacas en sus {reinado} años de reinado
      </p>
      <img src={img}/>
    </div>
  )
}

export default Actividad1
