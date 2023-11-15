import React, { useReducer } from 'react';
import Contexto from './Contexto';
import miReducer from './miReducer';
import types from './types'

const init = () => {
    const tipoVacaciones = localStorage.getItem("tipoVacaciones");
    const referencia = localStorage.getItem("referencia");
    const habitaciones = localStorage.getItem("habitaciones");
    const personas = localStorage.getItem("personas");
    const dias = localStorage.getItem("dias");
    const pregunta = localStorage.getItem("pregunta");

    return {
        tipoVacaciones: tipoVacaciones,
        referencia: referencia,
        habitaciones: habitaciones,
        personas: personas,
        dias: dias,
        pregunta: pregunta
    };

}

const Provider = ({children}) => {
    const loguearme = (tipoVacaciones='') => {
        const accion = {
            type: types.login,
            payload: {
                tipoVacaciones: tipoVacaciones
            }
        }
        localStorage.setItem("tipoVacaciones", tipoVacaciones);
        dispatch(accion);
    }

    const desloguearme = () => {
        const accion = {
            type: types.logout
        };

        localStorage.removeItem("tipoVacaciones");
        localStorage.removeItem("personas");
        localStorage.removeItem("habitaciones");
        localStorage.removeItem("dias");
        localStorage.removeItem("pregunta");
        localStorage.removeItem("referencia");
        dispatch(accion);
    }

    const setDias = (dias = '') => {
        const accion = {
            type: types.setDias,
            payload: {
                dias: dias
            }
        };

        localStorage.setItem("dias", dias);
        dispatch(accion);
    }

    const setHabitaciones = (habitaciones = '') => {
        const accion = {
            type: types.setHabitaciones,
            payload: {
                habitaciones: habitaciones
            }
        };

        localStorage.setItem("habitaciones", habitaciones);
        dispatch(accion);
    }

    const setPersonas = (personas = '') => {
        const accion = {
            type: types.setPersonas,
            payload: {
                personas: personas
            }
        };

        localStorage.setItem("personas", personas);
        dispatch(accion);
    }

    const setPregunta = (pregunta = '') => {
        const accion = {
            type: types.setPregunta,
            payload: {
                pregunta: pregunta
            }
        };

        localStorage.setItem("pregunta", pregunta);
        dispatch(accion);
    }

    const setReferencia = (referencia = '') => {
        const accion = {
            type: types.setReferencia,
            payload: {
                referencia: referencia
            }
        };

        localStorage.setItem("referencia", referencia);
        dispatch(accion);
    }

  const [usuario, dispatch] = useReducer(miReducer, {}, init);
  return (
    <Contexto.Provider value ={{
        ...usuario,
        loguearme,
        desloguearme,
        setDias,
        setHabitaciones,
        setPersonas,
        setPregunta,
        setReferencia
    }}>
        {children}
    </Contexto.Provider>
  )
}

export default Provider
