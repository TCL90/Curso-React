import './App.css';
import {useEffect, useState} from "react";

function App() {
  const [datos, setDatos] = useState([]);

  useEffect( () => {
    const url = "https://randomuser.me/api/?results=3";
    const peticion = fetch(url);
    peticion.then(datos => datos.json())
            .then(datos => {
              datos.results.map(user => ( 
                setDatos((arrayDatos) =>
                  [...arrayDatos, ...[<div key={user.email}>
                    <div>{datos.results[0].name.first} {datos.results[0].name.last}</div>
                    <div>
                      <img src={user.picture.large}/>
                    </div>
                  </div>]]
                  )
                )
              )
            })
            .catch(() => console.log("Error"));
  }, [])

  return (
    <>
    <h1>Premiad@s:</h1>
    {datos}
    </>
  );
}

export default App;
