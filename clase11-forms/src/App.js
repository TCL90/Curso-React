import './App.css';
import {useForm} from 'react-hook-form';
import { validadorTlf } from './validadorTlf';

function App() {
  const {handleSubmit, register, formState: {errors}, watch, setFocus, resetField} = useForm();
  const obtenerValores = (data) => {
    console.table(data)
    setFocus('telefono')
    resetField('telefono')
  }

  return (
    <>
      <form onSubmit={handleSubmit(obtenerValores)}>
        <div className='campo'>
          <label htmlFor='nombre'>Nombre:</label>
          <input id="nombre" placeholder='Introduce tu nombre...' autoFocus
          {...register('nombre', {
            required: true,
            maxLength: 15
          }
          )}/>
        </div>
        {errors.nombre?.type === "required" &&
        <div className='aviso'>
          El nombre es obligatorio.
        </div>
        }
        {errors.nombre?.type === "maxLength" &&
        <div className='aviso'>
          Máximo 15 caracteres.
        </div>
        }
        <div className='campo'>
          <label htmlFor='edad'>Edad:</label>
          <input type="number" id="edad" placeholder='Introduce tu edad...'
          {...register('edad', 
          {
            min: 0,
            max: 120
          }
          )}/>
        </div>
        {errors.edad?.type === "min" &&
        <div className='aviso'>
          El valor mínimo es 0.
        </div>
        }
        {errors.edad?.type === "max" &&
        <div className='aviso'>
          El valor máximo es 120.
        </div>
        }
        <div className='campo'>
          <label htmlFor='email'>Email:</label>
          <input id="email" placeholder='Introduce tu email...'
          {...register('email', 
          {
            pattern: /^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}$/
          }
          )}/>
        </div>
        {errors.email?.type === "pattern" &&
        <div className='aviso'>
          El email no es correcto.
        </div>
        }
        <div className='campo'>
          <label htmlFor='telefono'>Teléfono:</label>
          <input type='number' id="telefono" placeholder='Introduce tu teléfono...'
          {...register('telefono',
          {
            validate: validadorTlf
          })}/>
        </div>
        {errors.telefono?.type === "validate" &&
        <div className='aviso'>
          El teléfono debe ser un fijo de Barcelona (93...).
        </div>
        }
        <div>
          <input type="submit"/>
        </div>
      </form>
      {watch('nombre') &&
        <div className='resumen'>
          Me llamo <strong>{watch('nombre')}</strong>
          {watch('edad') && <span> y tengo <strong>{watch('edad')}</strong> años</span>}
        
        </div>
      }
    </>
    
  );
}

export default App;
