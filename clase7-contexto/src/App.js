import './App.css';
import Pagina1 from './Pagina1';
import Colores from './Colores';
import {Datos} from './contexto/Contexto';

function App() {
  return (
    <>
      <Datos>
        <div className="contenedor">
          <Pagina1 />
          <Pagina1 />
          <Pagina1 />
        </div>
        <Colores />
      </Datos>
    </>
  );
}

export default App;
