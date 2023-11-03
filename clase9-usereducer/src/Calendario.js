import React, { useReducer, useState } from 'react';

const currentTime = new Date();
const month = currentTime.getMonth();
const year = currentTime.getFullYear();
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", 
    "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const valorInicial = {m: month, a: year};
const types = {
  masM: 'masM',
  menosM: 'menosM',
  masA: 'masA',
  menosA: 'menosA'
}

const reducer = (state, action) => {
  let newMonth = state.m;
  let newYear = state.a;

  switch(action.type) {
    case 'masM':
      newMonth = (newMonth === 11) ? 0 : newMonth + 1;
      break

    case 'menosM':
      newMonth = (newMonth === 0) ? 11 : newMonth - 1;
      break
    
    case 'masA':
      newYear = newYear + action.payload;
      break
  
    case 'menosA':
      newYear = newYear - action.payload;
      break
  }
  return {m: newMonth, a: newYear}
};

function Calendario() {
  const [fecha, dispatch] = useReducer(reducer, valorInicial);
  const [unidades, setUnidades] = useState(1);
  return (
    <>  
    <div style={
      (fecha.m <= month || fecha.a <= year) ? {color: "red"} : {color: "green"}}>
          {meses[fecha.m]} ({fecha.a})
    </div>
    <div className='botones-m'>
      <button onClick={() => dispatch({type:types.menosM})}>-</button>
      <span>Meses:</span>
      <button onClick={() => dispatch({type:types.masM})}>+</button>
    </div>
    <div className='botones-a'>
      <button onClick={() => dispatch({type:types.menosA, payload: Number(unidades)})}>-</button>
      <input type='number' value={unidades} onChange={(e) => setUnidades(e.target.value)}/>
      <span>Años:</span>
      <button onClick={() => dispatch({type:types.masA, payload: Number(unidades)})}>+</button>
    </div>
    </>
  )
}

export default Calendario
