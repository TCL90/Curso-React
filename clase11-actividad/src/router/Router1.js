import {Routes, Route} from 'react-router-dom'
import Router2 from './Router2'
import RutasPublicas from './RutasPublicas'
import Destino from '../paginas/Destino'

function Router1() {
  return (
    <>
    <Routes>
        <Route path="tipoVacaciones" element={
        <RutasPublicas>
          <Destino />
        </RutasPublicas>  
        }/>
        <Route path="/*" element={
          <Router2 />
        }/>
    </Routes>
    </>
  )
}

export default Router1
