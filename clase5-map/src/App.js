import Actividad1 from './Actividad1';
import Actividad2 from './Actividad2';
import Actividad3 from './Actividad3';
import Actividad4 from './Actividad4';
import './App.css';
//import Map from './Map'

function App() {
  const reyes=[
    {
        nombre:"Atanagildo",
        reinado:15,
        vacasComidas:9
    },{
        nombre:"Ervigio",
        reinado:7,
        vacasComidas:3
    },{
        nombre:"Ataúlfo",
        reinado:5,
        vacasComidas:16
    },{
        nombre:"Leovigildo",
        reinado:18,
        vacasComidas:3
    },{
        nombre:"Sisebuto",
        reinado:9,
        vacasComidas:13
    },{
        nombre:"Recesvinto",
        reinado:19,
        vacasComidas:11
    },{
        nombre:"Teodorico",
        reinado:33,
        vacasComidas:12
    }
  ]

  const reyEmpiezaConE = reyes.find(rey => rey.nombre.toLowerCase().startsWith("e"));

  return (
    <div className='actividades'>
      <h1>Actividad 1:</h1>
      <div className='reyes'>
        {reyes.map(rey => <Actividad1 key = {rey.nombre}
          nombre={rey.nombre} vacasComidas={rey.vacasComidas*365*rey.reinado} reinado={rey.reinado}/>)}
      </div>
      <br/> 
      <h1>Actividad 2:</h1>
      {reyes.filter(rey => !rey.nombre.includes("g")).map(rey => <Actividad2 key = {rey.nombre} nombre={rey.nombre} />)}

      <br/>
      <h1>Actividad 3:</h1>
      <Actividad3 nombre={reyEmpiezaConE === undefined ? "No se ha encontrado" : reyEmpiezaConE.nombre} />

      <br/>
      <h1>Actividad 4:</h1>
      {reyes.filter(rey => rey.vacasComidas > 10 && rey.reinado > 10)
            .map(rey => <Actividad4 key = {rey.nombre} nombre={rey.nombre} />)}
    
    </div>
  );
}

export default App;
