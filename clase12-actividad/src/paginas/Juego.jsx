import React, { useState, useEffect, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import {PALABROS, abc} from '../data/datos';
import Contexto from '../contexto/Contexto';

function Juego() {
  const [azar, setAzar] = useState(0);
  const [palabra, setPalabra] = useState([]);
  const [misLetras, setMisLetras] = useState([]);
  const [errores, setErrores] = useState([]);
  const [aciertos, setAciertos] = useState([]);
  const navegacion = useNavigate();
  const { setCorrecta } = useContext(Contexto);

  useEffect(() => {
    setAzar(Math.floor(Math.random() * PALABROS.length));
  }, []);

  useEffect(() => {
    setCorrecta(PALABROS[azar].palabro)
    setPalabra(PALABROS[azar].palabro.split(""));
  }, [azar]);

  useEffect(() => {
    let noEncontrado = 0;
    palabra.map(p => {
        if (misLetras.find(e => e === p) === undefined) {
            noEncontrado++;
        }
    })
    if(noEncontrado === 0 && aciertos.length > 0) {
        navegacion("/felicidades");
    }
  }, [aciertos]);

  useEffect(() => {
    if(errores.length > 5) {
        navegacion("/game-over");
    }
  }, [errores]);

  const compruebaLetra = (e) => {
    const l = e.target.value;
    setMisLetras([...misLetras, l]);
    e.target.disabled = true;
    if (palabra.indexOf(l) > -1){
        setAciertos([...aciertos, l]);
    } else {
        setErrores([...errores, l]);
    }
  };

  return (
    <div className='juego'>
        <div className='pregunta'>
            <h1>{PALABROS[azar].pregunta}</h1>
        </div>
        <div className='palabra'>
            {palabra.map((letra, i) => misLetras.indexOf(letra) === -1 ?
            <span className='letra' key={i}></span> : <span className='letra' key={i}>{letra.toUpperCase()}</span>

            )}
        </div>
        <div className='botones'>
            {console.log(aciertos, errores)}
            {abc.map(letra => letra.toUpperCase()).map(letra =>
                aciertos.indexOf(letra) > -1 ?
                <button className='letraBoton correct' key={letra} 
                    onClick={(e) => compruebaLetra(e)} value={letra}>
                    {letra}
                </button>
                : errores.indexOf(letra) > -1 ?
                <button className='letraBoton fail' key={letra} 
                    onClick={(e) => compruebaLetra(e)} value={letra}>
                    {letra}
                    </button>
                :
                <button className='letraBoton' key={letra} 
                    onClick={(e) => compruebaLetra(e)} value={letra}>
                    {letra}
                </button>
            )}
        </div>
        <div className='imagen'>
            <img alt={errores.length+1} src={`./images/el_ahorcado${errores.length+1}.png`}></img>
        </div>

    </div>
  )
}

export default Juego
