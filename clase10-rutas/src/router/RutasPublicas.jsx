import React from 'react'
import { useContext } from 'react'
import Contexto from '../contexto/Contexto'
import { Navigate } from 'react-router-dom';

const RutasPublicas = ({children}) => {
  const {estado} = useContext(Contexto);
  console.log(estado);
  return (!estado) 
    ? children
    : <Navigate to="/contenido1" />
    
}

export default RutasPublicas
