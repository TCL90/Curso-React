import './App.css';
import Actividad1Banderas from './Actividad1Banderas';
import Actividad1Pagina from './Actividad1Pagina';
import { DatosActividad1 } from './contexto/ContextoActividad1';
/*
import Pagina1 from './Pagina1';
import Pagina2 from './Pagina2';
import Pagina3 from './Pagina3';
import Colores from './Colores';
import {Datos} from './contexto/Contexto';
*/

function App() {
  return (
/*
    <>
      <Datos>
        <div className="contenedor">
          <Pagina1 />
          <Pagina2 />
          <Pagina3 />
        </div>
        <Colores />
      </Datos>
      </>
*/
    <>
      <DatosActividad1>
        <Actividad1Banderas />
        <Actividad1Pagina />
      </DatosActividad1>
    </>
  );
}

export default App;
