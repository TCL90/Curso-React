import {Routes, Route, Navigate} from 'react-router-dom'
import NavBar from '../navBar/NavBar'
import PaginaCp from '../paginas/PaginaCp'
import PaginaNe from '../paginas/PaginaNe'
import Ruta from '../paginas/Ruta'
import DetalleUbicacion from '../paginas/DetalleUbicacion'

function Router2() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="cp" element={<PaginaCp />}/>
        <Route path="ne" element={<PaginaNe />}/>
        <Route path="ruta" element={<Ruta />}/>
        <Route path="destino/:destino" element={<DetalleUbicacion />}/>
        <Route path="/*" element={<Navigate to="cp" />}/>
      </Routes>
    </>
  )
}

export default Router2
