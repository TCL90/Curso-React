import './App.css';
import jsImage from './images/js.png'
import reactImage from './images/react.png'
import {useRef} from 'react'

function App() {
  const refCaja = useRef();
  const cambioLibras = 0.87;

  function incrementar(e) {
    e.target.innerHTML = Number(e.target.innerHTML) + 1;
    if(e.target.innerHTML >= 8) {
      e.target.style.backgroundColor = "red";
      if(e.target.innerHTML >= 10){
        e.target.innerHTML = 1;
        e.target.style.backgroundColor = "white";
      }
    }
  }

  function conversion() {
    refCaja.current.innerHTML = Number(refCaja.current.innerHTML) * cambioLibras;
  }

  function nuevoInput(e) {
    refCaja.current.innerHTML = e.target.value
  }

  function cambioImg(e) {
    e.target.src = e.target.src.includes(jsImage) ? reactImage : jsImage;
  }

  return (
    <>
      <div ref={refCaja} className="caja" onClick={incrementar}>1</div>
      <button onClick={conversion}>Aceptar</button>
      <div>
        <img onClick={cambioImg} src={reactImage}/>
      </div>
      <input onChange={nuevoInput} className="campo"/>
    </>
  );
}

export default App;
