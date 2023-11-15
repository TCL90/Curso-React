import './App.css';
import Provider from './contexto/Provider';
import { Routes, Route } from 'react-router-dom';
import Portada from './paginas/Portada';
import Juego from './paginas/Juego';
import Final from './paginas/Final';
import Ganado from './paginas/Ganado';

function App() {
  return (
    <Provider>
      <Routes>
          <Route path="/" element={<Portada />}/>
          <Route path="/ahorcado" element={<Juego />}/>
          <Route path="/game-over" element={<Final />}/>
          <Route path="/felicidades" element={<Ganado />}/>
      </Routes>
    </Provider>
  );
}

export default App;
