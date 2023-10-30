import React from 'react'

function MiComponente(props) {
  return (
    <div>
      <h1>Hola {props.rey} come {props.reses} vacas al día</h1>
    </div>
  )
}

/*
Entrada desestructurada con valores por defecto:

function MiComponente({rey="Atanagildo", reses=4}) {
  return (
    <div>
      <h1>Hola {rey} come {reses} vacas al día</h1>
    </div>
  )
}
*/

/*
Array como entrada:

function MiComponente({props}) {
  return (
    <div>
      <h1>Hola {props[0]} come {props[1]} vacas al día</h1>
    </div>
  )
}
*/

/*
Objeto como entrada:

function MiComponente({props}) {
  return (
    <div>
      <h1>Hola {props.rey} come {props.reses} vacas al día</h1>
    </div>
  )
}
*/

MiComponente.defaultProps = {
    reses: "Pocas", 
    rey: "Rey Godo"
}

export default MiComponente
