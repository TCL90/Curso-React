import React, { useState } from 'react';
import Contexto from './Contexto';

const Provider = ({children}) => {
  const [correcta, setCorrecta] = useState("");

  return (
    <Contexto.Provider value ={{
        correcta,
        setCorrecta
    }}>
        {children}
    </Contexto.Provider>
  )
}

export default Provider
