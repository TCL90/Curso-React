import types from './types'

const miReducer = (state, action) => {
  switch(action.type){
    case types.login:
        return {
            referencia: action.payload.referencia,
            lugares: action.payload.lugares,
            coste: action.payload.coste
        }
    case types.logout:
        return {
            referencia: false,
            lugares: undefined,
            coste: 0
        }
    case types.addLugar:
        return {
            referencia: state.referencia,
            lugares: [...state.lugares, [action.payload.lugar, action.payload.coste]], 
            coste: Number(state.coste) + Number(action.payload.coste)
        }
    case types.removeLugar:
        return {
            referencia: state.referencia,
            lugares: state.lugares.filter(l => l[0] !== action.payload.lugar), 
            coste: Number(state.coste) - Number(action.payload.coste)
        }
    default:
        return state;
  }
}

export default miReducer
