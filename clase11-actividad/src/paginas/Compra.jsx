import React, { useContext } from 'react';
import {datos} from '../datos/datos';
import Contexto from '../contexto/Contexto';
import {useForm} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {datosForm} from '../datos/datosForm';

function Compra() {
  const {tipoVacaciones, pregunta, dias, habitaciones, personas, referencia, 
    desloguearme, setDias, setPersonas, setHabitaciones, setPregunta, 
    setReferencia} = useContext(Contexto);
  const el = datos.find(d => d.lugar === tipoVacaciones);
  const {handleSubmit, register, formState: {errors}, watch, reset, setFocus} = useForm();
  const navegacion = useNavigate();
  const vuelve = () => {
    desloguearme();
    navegacion("/tipoVacaciones");
  }
  const continuaForm = (data) => {
    if(pregunta < 3){
        switch(pregunta){
            case 0:
                setReferencia(data.compra);
                break;
            case 1:
                setHabitaciones(data.compra);
                break;
            case 2: 
                setPersonas(data.compra);
                break;
            default:
                break;
        }
    setFocus("compra")
    reset()
    setPregunta(Number(pregunta) + 1);
    navegacion("/compra");
    } else {
        setDias(data.compra);
        setPregunta(Number(pregunta) + 1);
        navegacion("/resumen");
    }
  }

  return (
    <>
        <div className='askData'>
            <form onSubmit={handleSubmit(continuaForm)}>
                <div className='tituloForm'>
                    <h1>{datosForm[pregunta].texto}</h1> 
                    {watch('compra') !== undefined && watch('compra') !== "" ? <p className='watch'>
                    <strong>{watch('compra')}</strong> {datosForm[pregunta].sufijo}</p> : ''}
                </div>
                <div className='inputF'>
                    <input name="compra" type={datosForm[pregunta].type} 
                    autoComplete='off' autoFocus {...register('compra',
                    {
                        required: datosForm[pregunta].obligatorio,
                        min: datosForm[pregunta].minimo,
                        max: datosForm[pregunta].maximo
                    }
                    )}/>
                    <span className='require'>{errors.compra?.type === "required" && <>
                    Debes rellenar el campo.</>}{errors.compra?.type === "min" && <>
                    El valor mínimo es {datosForm[pregunta].minimo}.</>}{errors.compra?.type === "max" && <>
                    El valor máximo es {datosForm[pregunta].maximo}.</>}</span>
                    <div className='botones'>
                        <input type="submit" /><button onClick={() => vuelve()}>Volver</button>
                    </div>
                </div>
            </form>
            <div className='resumen'>
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
