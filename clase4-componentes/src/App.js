import './App.css';
import { useState } from 'react';
import Actividad1 from './Actividad1';
// import MiComponente from './MiComponente';
import nedImg from './images/ned-stark.png';
import stannisImg from './images/stannis.png';
import danyImg from './images/dany.png';
import cerseiImg from './images/cersei.png';
import johnImg from './images/john.png';
import aryaImg from './images/arya.png';

function App() {
  const [total, setTotal] = useState(0);
  const reyes=[
    {
      nombre:"Ned Stark",
      color:"gray",
      src: nedImg,
      totalSetter: {setTotal},
      precio:178
    },{
      nombre:"Stannis Baratheon",
      color:"yellow",
      src: stannisImg,
      totalSetter: {setTotal},
      precio:169
    },{
      nombre:"Daenerys Targaryen",
      color:"red",
      src: danyImg,
      totalSetter: {setTotal},
      precio:300
    },{
      nombre:"John Nieve",
      color:"orange",
      src: johnImg,
      totalSetter: {setTotal},
      precio:126
    },{
      nombre:"Cersei Lannister",
      color:"beige",
      src: cerseiImg,
      totalSetter: {setTotal},
      precio:141
    },{
      nombre:"Arya Stark",
      src: aryaImg,
      totalSetter: {setTotal},
      color:"violet",
      precio:69
    }
  ]

  return (
    <>
    {/*
    <h2>Reyes Godos:</h2>
    <MiComponente rey="Atanagildo" reses={5} vivo={true}/>
    <MiComponente rey="Ervigio" reses={5} vivo={true}/>
    */
    }
    <h1>Total a Pagar: {total}€</h1>
    <div className='reyes'>
      {
        /* Normal, sin map
        <Actividad1 rey={reyes[0]}/>
        <Actividad1 rey={reyes[1]}/>
        <Actividad1 rey={reyes[2]}/>
        <Actividad1 rey={reyes[3]}/>
        <Actividad1 rey={reyes[4]}/>
        <Actividad1 rey={reyes[5]}/>
        */
      }
      
      {reyes.map((rey) => <Actividad1 rey={rey} />)}
    </div>
    </>
  );
}

export default App;
