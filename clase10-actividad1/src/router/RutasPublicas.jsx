import React from 'react'
import { useContext } from 'react'
import Contexto from '../contexto/Contexto'
import { Navigate } from 'react-router-dom';

const RutasPublicas = ({children}) => {
  const {referencia} = useContext(Contexto);
  return (!referencia) 
    ? children
    : <Navigate to="/contenido1" />
    
}

export default RutasPublicas
