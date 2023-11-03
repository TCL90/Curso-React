import React, {useState, useReducer, useRef} from 'react'
import './Actividad1.css';

const types = {
    add: 'add',
    aumentar: 'aumentar',
    disminuir: 'disminuir',
    eliminar: 'eliminar'
}
const reducer = (state, action) => {
    switch(action.type) {
    case "add":
        return [...state, action.payload]

    case "aumentar":
        return state.map(p => 
            (action.payload === p.id) 
            ? {...p, cantidad: p.cantidad+1} 
            : p
            )

    case "disminuir":
        return state.map(p => 
            (action.payload === p.id && p.cantidad > 1) 
            ? {...p, cantidad: p.cantidad-1} 
            : p
            )

    case "eliminar":
        return state.filter(p => !(action.payload === p.id))

    default: 
        return state;
    }
}
const valorInicial = [];

function Actividad1() {
  const [listaProductos, dispatch] = useReducer(reducer, valorInicial);
  const [producto, setProducto] = useState("");
  const inputName = useRef(null);

  const anyade = () => {
    const filter = listaProductos.filter(p => p.nombre === producto);
    filter.length === 0 ? 
    dispatch({type: types.add, payload: {id:listaProductos.length + 1, nombre: producto, cantidad: 1}}) 
    : filter[0].cantidad = 1;
    inputName.current.focus();
    setProducto("");
    };

  return (
    <>
    <div className='barra'>
        <span>Producto:</span>
        <input ref={inputName} value={producto} onChange={(e) => setProducto(e.target.value)} type="text"/>
        <button onClick={() => anyade()}>Añadir</button>
    </div>
    <div className='productos'>
        {listaProductos.map(p => (
        <div key={p.id} className='producto'>
            <span>{p.nombre} ({p.cantidad} unidad/es)</span>
            <div className='botones'>
                <button onClick={() => dispatch({type: types.disminuir, payload: p.id})}>-</button>
                <button onClick={() => dispatch({type: types.aumentar, payload: p.id})}>+</button>
                <button onClick={(e) => 
                    dispatch({type: types.eliminar, payload: p.id})}>x</button>
            </div>
        </div>
        ))}
    </div>
    </>
  )
}

export default Actividad1
