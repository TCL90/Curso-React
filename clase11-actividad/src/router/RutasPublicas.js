import React from 'react'
import { useContext } from 'react'
import Contexto from '../contexto/Contexto'
import { Navigate } from 'react-router-dom';

const RutasPublicas = ({children}) => {
  const {tipoVacaciones} = useContext(Contexto);
  return (tipoVacaciones === null) 
    ? children
    : <Navigate to="/compra" />
    
}

export default RutasPublicas
