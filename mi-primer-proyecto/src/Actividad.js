import './index.css';
import './Actividad.css';
import jsImg from './resources/js.png'
import nodeImg from './resources/node.png'
import reactImg from './resources/react.png'

function App() {
  let tecnologias = ["JavaScript", "ReactJs", "NodeJs"]


  return (
    <div className="fondo">
        <h1>Tecnologías</h1>
        <div className='cards'>
            <div className='card'>
                <img src={reactImg}/>
                <p>{tecnologias[1]}</p>
            </div>
            <div className='card'>
                <img src={nodeImg}/>
                <p>{tecnologias[2]}</p>
            </div>
            <div className='card'>
                <img src={jsImg}/>
                <p>{tecnologias[0]}</p>
            </div>
        </div>
    </div>
  );
}

export default App;
