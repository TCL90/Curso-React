import React, { useContext } from 'react';
import {datos} from '../datos/datos';
import {datosForm} from '../datos/datosForm';
import Contexto from '../contexto/Contexto';
import {useForm} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function Compra() {
  const {tipoVacaciones, pregunta, dias, habitaciones, personas, referencia, 
    desloguearme} = useContext(Contexto);
  const el = datos.find(d => d.lugar === tipoVacaciones);
  const {handleSubmit} = useForm();
  const navegacion = useNavigate();
  const vuelve = () => {
    desloguearme();
    navegacion("/tipoVacaciones");
  }

  const imprimir = () => {
    window.print();
  }

  return (
    <>
        <div className='askData impresion'>
            <form onSubmit={handleSubmit(imprimir)}>
                <div className='tituloForm'>
                    <h1>{datosForm[pregunta].texto}</h1>
                </div>
                    <div className='botones'>
                        <input type="submit" /><button onClick={() => vuelve()}>Volver</button>
                    </div>
            </form>
            <div className='resumen impresion'>
                <h1>Resumen:</h1>
                <img src={el.imagen} alt={el.lugar}/>
                <div className='info'>
                    <p><span>Zona:</span><span>{el.lugar}</span></p>
                    <p><span>€/día:</span><span>{el.precio}</span></p>
                    {referencia !== null ? <p><span>Referencia:</span><span>{referencia}</span></p> : ''}
                    {habitaciones !== null ? <p><span>Habitaciones:</span><span>{habitaciones}</span></p> : ''}
                    {personas !== null ? <p><span>Personas:</span><span>{personas}</span></p> : ''}
                    {dias !== null ? <p><span>Dias:</span><span>{dias}</span></p> : ''}
                    <p><span>Total:</span><span>{el.precio*(dias||1)*(personas||1)*(habitaciones||1)}</span></p>
                </div>
            </div>
        </div>
        
    </>
  )
}

export default Compra
