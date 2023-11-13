import React, {useContext} from 'react'
import {Link} from 'react-router-dom';
import Contexto from '../contexto/Contexto';

function Ruta() {
  const {referencia, coste, lugares, removeLugar} = useContext(Contexto);

  return (
    <div className='ruta'>
        <h1>Lugares a visitar: </h1>
        {(lugares.length === 0) && 
          <div className='aviso'>
            Todavía no has seleccionado ninguna actividad. <br/>
            Haz clic en {<Link to={'/cp'}>Capital y Patagonia</Link>}o 
            {<Link to={'no'}>Norte y Este</Link>} para ver nuestras ofertas.
          </div>
        }
        <section className='cuenta'>
          {lugares.map(l =>
            <div key={l[0]} className='item'>
              <button onClick={() => removeLugar(l[0], l[1])}>Anular</button>
              <p>{l[0]} ({l[1]}$)</p>
            </div>
          )}
        </section>
        <h1>Total a Pagar: {coste !== undefined ? coste : 2000}$</h1>
        <h1>Referencia: {referencia}</h1>
    </div>
  )
}

export default Ruta
