import React, {useContext} from 'react';
import {datos} from '../datos/datos';
import {useForm} from 'react-hook-form';
import Contexto from '../contexto/Contexto';
import { useNavigate } from 'react-router-dom';

function Destino() {
  const {loguearme, setPregunta} = useContext(Contexto);
  const navegacion = useNavigate();
  const {handleSubmit, register, formState: {errors}} = useForm();
  const obtenerValores = (data) => {
    loguearme(data.check);
    setPregunta(0);
    navegacion("/compra")
  }
  return (
    <form onSubmit={handleSubmit(obtenerValores)}>
        <p className='selecciona'>Selecciona la zona a visitar:<input type="submit"/>
          {errors.check?.type === "required" && 
              <span className='aviso'>Debes seleccionar una opción </span>}
        </p>
        <div className='opciones'>
            {datos.map(tipo => 
                <div className='opcion' key={tipo.lugar}>
                    <input name="check" type="radio" value={tipo.lugar}
                    {...register('check', 
                    {
                      required: true
                    }
                    )}
                    />
                    <p>{tipo.lugar}</p>
                    <p className='precio'>({tipo.precio}€)</p>
                    <img src={tipo.imagen} alt={tipo.lugar}/>
                </div>)}
        </div>
    </form>
  )
}

export default Destino
