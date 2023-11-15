import {Routes, Route} from 'react-router-dom'
import RutasPrivadas from './RutasPrivadas'
import Compra from '../paginas/Compra'
import Resumen from '../paginas/Resumen'

function Router2() {
  return (
    <>
    <Routes>
      <Route path="/compra" element={
        <RutasPrivadas>
          <Compra />
        </RutasPrivadas>
      }/>
      <Route path="/resumen" element={
        <RutasPrivadas>
          <Resumen />
        </RutasPrivadas>
      }/>
      
    </Routes>
    </>
  )
}

export default Router2
