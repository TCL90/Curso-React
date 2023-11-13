import React, { useReducer } from 'react';
import Contexto from './Contexto';
import miReducer from './miReducer';
import types from './types'

const init = () => {
    const valor = localStorage.getItem("estado");
    return {
        estado: !!valor
    };

}

const Provider = ({children}) => {
    const loguearme = (user='') => {
        const accion = {
            type: types.login
        }
        localStorage.setItem("estado", user);
        dispatch(accion);
    }

    const desloguearme = () => {
        const accion = {
            type: types.logout
        };
        console.log("Deslogueando");
        localStorage.removeItem("estado");
        dispatch(accion);
    }

  const [logueado, dispatch] = useReducer(miReducer, {}, init);
  return (
    <Contexto.Provider value ={{
        ...logueado,
        loguearme,
        desloguearme
    }}>
        {children}
    </Contexto.Provider>
  )
}

export default Provider
