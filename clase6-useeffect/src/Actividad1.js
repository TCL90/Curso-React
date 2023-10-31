import React, {useState, useEffect} from 'react'

function Actividad1() {
    const [broma, setBroma] = useState("");
    const otro = () => {
        const url = "https://api.chucknorris.io/jokes/random";
        const peticion = fetch(url);
        peticion.then(datos => datos.json())
                .then(datos => setBroma(datos.value))
                .catch(() => setBroma("No se ha podido recuperar ningún chiste."))
    }
    useEffect(() => {
        otro();
    }, []);

  return (
    <div>
      <h1>Chistes de Chuck Norris</h1>
      <p>{broma}</p>
      <button onClick={otro}>Otro chiste</button>
    </div>
  )
}

export default Actividad1
