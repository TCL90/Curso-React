import './Actividad2.css';
import React, {useState} from 'react';

function Actividad2() {
  const [divisas, setDivisas] = useState([]);
  
  const cambio = (e) => {
    const euros = e.target.value;
    setDivisas([euros, euros * 370.8, euros * 4379.71, euros * 19.12, euros * 1.06]);
  };

  return (
      <>
        <div className='conversor'>
            <label htmlFor="euro">Euro</label>
            <input onChange={cambio} id="euro" type="number" value={divisas[0]}/>
            <label htmlFor="pa">Peso Argentino</label>
            <input id="pa" type="number" value={divisas[1]} readOnly/>
            <label htmlFor="pc">Peso Colombiano</label>
            <input id="pc" type="number" value={divisas[2]} readOnly/>
            <label htmlFor="pm">Peso Mexicano</label>
            <input id="pm" type="number" value={divisas[3]} readOnly/>
            <label htmlFor="dolar">Dólar</label>
            <input id="dolar" type="number" value={divisas[4]} readOnly/>
        </div>
      </>
  );
}

export default Actividad2;
