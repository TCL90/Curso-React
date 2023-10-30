import React from 'react'
import './Actividad1.css'

function Actividad1({rey}) {
  const style = {
    backgroundColor: rey.color
  }

  function comprar(event) {
    console.log(rey)
    rey.totalSetter.setTotal((e) => e + rey.precio);
    event.target.parentNode.parentNode.style.display = "none";
  }

  return (
    <div className='cardRey' style={style}>
        <h1>{rey.nombre}</h1>
        <img src={rey.src}/>
        <div className='precio'>
            <p>Precio:</p>
            <p>{rey.precio}€</p>
            <button onClick={comprar}>Comprar</button>
        </div>
    </div>
  )
}

export default Actividad1
