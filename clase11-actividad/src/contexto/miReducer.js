import types from './types'

const miReducer = (state, action) => {
  switch(action.type){
    case types.login:
        return {...state,
            tipoVacaciones: action.payload.tipoVacaciones
        }
    case types.logout:
        return {
            tipoVacaciones: null,
            dias: null,
            personas: null,
            pregunta: null,
            habitaciones:null,
            referencia: null
        }
    case types.setDias:
        return {
            ...state, dias: action.payload.dias
        }
    case types.setHabitaciones:
        return {
            ...state, habitaciones: action.payload.habitaciones
        }
    case types.setPersonas:
        return {
            ...state, personas: action.payload.personas
        }
    case types.setReferencia:
        return {
            ...state, referencia: action.payload.referencia
        }
    case types.setPregunta:
        return {
            ...state, pregunta: action.payload.pregunta
        }
    default:
        return state;
  }
}

export default miReducer
