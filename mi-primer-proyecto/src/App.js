import './App.css';
import './miCss.css';
import imagen from './resources/react.png'

function App() {
  let nombre = "Tomás";
  let nombre2 = <p className="resultado">Tomás</p>;
  let arrayNombres = ["Tomás", "Jaime"]
  let persona = {nombre: "Tomás", edad: 25}

  return (
    <div className="fondo">
      <div className="titulo">
        <h1>Curso de React</h1>
        <img className="im" src={imagen}/>
      </div>
      <div className="cuerpo">
        <input type="text" value={nombre}/>
        <br/>
        <div className="test"><p className="def">Variable let como String:</p> <p className="resultado">{nombre}</p></div>
        <div className="test">
          <p className="def">Variable let como p que tiene dentro un string:</p> {nombre2}
        </div>
        <div className="test">
          <p className="def">Array nombres:</p> 
          <p className="resultado"> {arrayNombres}</p>
        </div>
        <div className="test">
          <p className="def">Array nombre 1:</p> 
          <p className="resultado"> {arrayNombres[0]}</p>
          <p className="def">Array nombre 2:</p> 
          <p className="resultado"> {arrayNombres[1]}</p>
        </div>
        <div className="test">
          <p className="def">Objeto persona:</p> 
          <p className="resultado"> Nombre: {persona.nombre}, Edad: {persona.edad}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
