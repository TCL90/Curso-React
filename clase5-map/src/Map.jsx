import React from 'react'

function Map() {
  const reyes = [
    {
        nombre: "Teodorico",
        reinado: 33,
        vacasComidas: 12
    },{
        nombre: "Recesvinto",
        reinado: 19,
        vacasComidas: 11
    },{
        nombre: "Atanagildo",
        reinado: 15,
        vacasComidas: 9
    },{
        nombre: "Ervigio",
        reinado: 7,
        vacasComidas: 3
    },{
        nombre: "Ataúlfo",
        reinado: 5,
        vacasComidas: 16
    },{
        nombre: "Leovigildo",
        reinado: 18,
        vacasComidas: 3
    },{
        nombre: "Sisebuto",
        reinado: 9,
        vacasComidas: 13
    }
  ]

  /*
  const resultado = reyes.filter(valor => valor.vacasComidas >= 10 && valor.vacasComidas <= 12)
                            .map(valor => 
                            <div key={valor.nombre}>{valor.nombre} come {valor.vacasComidas} vacas 
                            al día </div>);

  const resultado = reyes.find(valor => valor.vacasComidas >= 10 && valor.vacasComidas <= 12);
  const resultado = reyes.find(valor => valor.nombre.includes("a"));
  */
  const resultado = reyes.filter(valor => valor.nombre.includes("a"))
                         .map(valor => 
                            <div key={valor.nombre}>{valor.nombre} come {valor.vacasComidas} vacas 
                            al día </div>);

  return (
    <div className='caja'>
      {resultado}
    </div>
  )
}

export default Map
