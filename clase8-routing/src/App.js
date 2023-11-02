import A from './paginas/A';
import B from './paginas/B';
import C from './paginas/C';
import D from './paginas/D';
import Error404 from './paginas/Error404';
import Nav from './Nav';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Nav />
      <Routes>
        <Route path="/" element={<A/>} />
        <Route path="pagina1" element={<Navigate to="/"/>} />
        <Route path="pagina2" element={<B/>} />
        <Route path="pagina3" element={<C/>} />
        <Route path="pagina4/:letra" element={<D/>} />
        <Route path="*" element={<Error404/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
