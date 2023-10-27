import './App.css';
import React, {useState} from 'react';

function App() {
  const [nombre, setNombre] = useState("Tomás");
  console.log(`Inicio: ${nombre}`);
  
  const [contador, setContador] = useState(0);
  console.log(`Inicio Contador: ${contador}`);

  let [contador2, setContador2] = useState(0);
  console.log(`Inicio Contador2: ${contador2}`);

  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const [suma, setSuma] = useState(0);

  function incrementa3() {
    setContador((c) => c + 1);
    console.log(contador);
    setContador((c) => c + 1);
    console.log(contador);
    setContador((c) => c + 1);
    console.log(contador);
  }
  return (
      <>
      <h1>Me llamo {nombre}</h1>
      <button onClick={() => {setNombre("Juan")}}>Cambia Nombre</button>
      <h1>Contador: {contador}</h1>
      <button onClick={() => setContador((c) => c + 1)}>Incrementar Contador</button>
      <button onClick={incrementa3}>+3</button>
      <button onClick={() => setContador((c) => c - 1)}>Decrementar Contador</button>
      <button onClick={() => setContador(0)}>Reinicia Contador</button>

      <h1>Contador2: {contador2}</h1>
      <button onClick={() => setContador2(++contador2)}>Incrementar Contador</button>
      <button onClick={() => setContador2(--contador2)}>Decrementar Contador</button>
      <button onClick={() => setContador2(0)}>Reinicia Contador</button>

      <br/>
      <h1>Cálculo:</h1>
      <div className='calculo'>
        <input value={numero1} onChange={(e) => setNumero1(e.target.value)} type="number"/>+
        <input value={numero2} onChange={(e) => setNumero2(e.target.value)} type="number"/>=
        <input type="number" value={suma} readOnly/>
        <button onClick={() => {setSuma(Number(numero1) + Number(numero2))}}>Sumar</button>
      </div>
      </>
  );
}

export default App;
