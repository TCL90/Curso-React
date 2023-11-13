import React, { useReducer } from 'react';
import Contexto from './Contexto';
import miReducer from './miReducer';
import types from './types'

const init = () => {
    const valor = localStorage.getItem("referencia");
    const l = localStorage.getItem("lugares");
    const c = localStorage.getItem("coste");

    return {
        referencia: valor,
        lugares: l === undefined ? [] : JSON.parse(l),
        coste: c === undefined ? 0 : c,
    };

}

const Provider = ({children}) => {
    const loguearme = (referencia='') => {
        const accion = {
            type: types.login,
            payload: {
                referencia: referencia,
                lugares: [],
                coste: 0
            }
        }
        localStorage.setItem("referencia", referencia);
        localStorage.setItem("lugares", JSON.stringify([]));
        localStorage.setItem("coste", 0);
        dispatch(accion);
    }

    const desloguearme = () => {
        const accion = {
            type: types.logout
        };

        localStorage.removeItem("referencia");
        localStorage.removeItem("lugares");
        localStorage.removeItem("coste");
        dispatch(accion);
    }

    const addLugar = (lugar, coste) => {
        const accion = {
            type: types.addLugar,
            payload: {
                lugar: lugar,
                coste: coste
            }
        };
        const lugares = localStorage.getItem("lugares") 
        ? JSON.parse(localStorage.getItem("lugares")) : [];
        lugares.push([lugar, coste]);
        localStorage.setItem("lugares", JSON.stringify(lugares));
        dispatch(accion);
    }

    const removeLugar = (lugar, coste) => {
        const accion = {
            type: types.removeLugar,
            payload: {
                lugar: lugar,
                coste: coste,
            }
        };

        localStorage.setItem("lugares", JSON.stringify(
            JSON.parse(
                localStorage.getItem("lugares")
                ).filter(l => l[0] !== lugar)
                ));
        dispatch(accion);
    }

  const [referencia, dispatch] = useReducer(miReducer, {}, init);
  return (
    <Contexto.Provider value ={{
        ...referencia,
        loguearme,
        desloguearme,
        addLugar,
        removeLugar
    }}>
        {children}
    </Contexto.Provider>
  )
}

export default Provider
