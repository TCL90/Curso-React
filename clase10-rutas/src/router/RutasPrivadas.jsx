import React from 'react'
import { useContext } from 'react'
import Contexto from '../contexto/Contexto'
import { Navigate } from 'react-router-dom';

const RutasPrivadas = ({children}) => {
  const {estado} = useContext(Contexto);
  return (estado) 
    ? children
    : <Navigate to="/login" />
    
}

export default RutasPrivadas
