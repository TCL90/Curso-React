import React, {useEffect, useState} from 'react';
import './Actividad2.css';

function Actividad2() {
  const [cartas, setCartas] = useState([]);

  useEffect(() => {
    const url = "https://api.magicthegathering.io/v1/cards?count=1";
    const peticion = fetch(url);

    peticion.then(datos => datos.json())
            .then(datos => {
                datos.cards.map(carta => {
                    if (carta.imageUrl !== undefined) {
                        setCartas((arrayCartas) =>
                            [...arrayCartas, ...[
                            <div key={carta.id} className="carta">
                                <h1>{carta.name}</h1>
                                <h2>{carta.types}</h2>
                                <h3>{carta.type}</h3>
                                <img src={carta.imageUrl}/>
                                <p><span className='bold'>Rareza:</span> {carta.rarity}</p>
                                <p><span className='bold'>Coste de mana:</span> {carta.cmc}: ({carta.manaCost})</p>
                                <p><span className='bold'>Colores:</span> {carta.colors}</p>
                                <br/>
                                <p>{carta.text}</p>
                            </div>
                            ]]

                        )
                    }
                }
            )
        })
        .catch(() => console.log)
    }, [])
  
  return (
    <div className='cartas'>
      {cartas}
    </div>
  )
}

export default Actividad2
