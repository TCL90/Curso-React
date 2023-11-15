import React from 'react'
import { useContext } from 'react'
import Contexto from '../contexto/Contexto'
import { Navigate } from 'react-router-dom';

const RutasPublicas = ({children}) => {
  const {partidaAcabada} = useContext(Contexto);
  return (partidaAcabada === null) 
    ? children
    : <Navigate to="/ahorcado" />
    
}

export default RutasPublicas
