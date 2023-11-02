import React from 'react'
import Error404 from './paginas/Error404';
import Reyes from './paginasActividad1/Reyes';
import NavActividad1 from './NavActividad1';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import './Actividad1.css';
import Rey from './paginasActividad1/Rey';

function Actividad1() {
  const reyes = ["atanagildo", "ataulfo", "ervigio", "leovigildo", "recesvinto", "sisebuto"];
  return (
    <BrowserRouter>
      <NavActividad1 />
      <Routes>
        <Route path="/" element={<Reyes />} />
        <Route path="/leogivildo" element={<Navigate to="/leovigildo" />} />
        {reyes.map(rey => 
            <Route path={"/:rey"} element={<Rey />} />
            
            )}
        <Route path="*" element={<Error404/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Actividad1
