import './index.css';
import './Actividad.css';
import jsImg from './resources/js.png'
import nodeImg from './resources/node.png'
import reactImg from './resources/react.png'
import qmImg from './resources/qm.png'

function App() {
  let tecnologias = ["JavaScript", "ReactJs", "NodeJs"];

  const cambioImg = (e) => {
    if(e.target.src.includes(qmImg)) {
        e.target.style.visibility = "hidden";
        return;
    } else {
        e.target.src = qmImg;
        e.target.parentNode.style.backgroundColor = "white";
    };
  }

  const cambioTexto = (e) => {
    if(tecnologias.includes(e.target.innerHTML)) {
            e.target.innerHTML = "Visto";
            return;
        }
        e.target.innerHTML = "";
  }

  return (
    <div className="fondo">
        <h1>Tecnologías</h1>
        <div className='cards'>
            <div className='card'>
                <img onClick={cambioImg} src={reactImg}/>
                <p onClick={cambioTexto}>{tecnologias[1]}</p>
            </div>
            <div className='card'>
                <img onClick={cambioImg} src={nodeImg}/>
                <p onClick={cambioTexto}>{tecnologias[2]}</p>
            </div>
            <div className='card'>
                <img onClick={cambioImg} src={jsImg}/>
                <p onClick={cambioTexto}>{tecnologias[0]}</p>
            </div>
        </div>
    </div>
  );
}

export default App;
