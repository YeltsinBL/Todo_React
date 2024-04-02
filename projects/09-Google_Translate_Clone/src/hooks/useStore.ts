import { useReducer } from "react"
import { Action, FromLanguage, Language, State } from "../type"

// 1. Creación Inicial
const initialState: State = {
    fromLanguage: 'auto',
    toLanguage: 'en',
    fromText: '',
    result: '',
    loading: false
}

// 2. Creación del Reducer
function reducer(state: State, action: Action) {
    const { type } = action
    if (type === 'INTERCHANGE_LANGUAGES') {
        return {
            ...state,
            fromLanguages: state.toLanguage,
            toLanguages: state.fromLanguage
        }
    }

    if (type === 'SET_FROM_LANGUAGE') {
        return {
            ...state,
            fromLanguage: action.payload // cambiamos al nuevo idioma
        }
    }

    if (type === 'SET_TO_LANGUAGE') {
        return {
            ...state,
            toLanguage: action.payload // cambiamos al nuevo idioma
        }
    }
    if (type === 'SET_FROM_TEXT') {
        return {
            ...state,
            loading: true,
            fromText: action.payload, // cambiamos el texto idioma
            result: ''
        }
    }
    if (type === 'SET_RESULT') {
        return {
            ...state,
            loading: true,
            result: action.payload // cambiamos el resultado
        }
    }

    return state
}

export function useStore() {
    // 3. Uso del hook useReducer
    const [{
        fromLanguage, toLanguage, fromText,
        result, loading
    }, dispatch] = useReducer(reducer, initialState)

    // El dispatch debe se usarse solo aquí y se debe de pasar la acción que hace
    const interchangeLanguages = () => {
        dispatch({ type: 'INTERCHANGE_LANGUAGES' })
    }
    const setFromLanguages = (payload: FromLanguage) => {
        dispatch({ type: 'SET_FROM_LANGUAGE', payload })
    }
    const setToLanguages = (payload: Language) => {
        dispatch({ type: 'SET_TO_LANGUAGE', payload })
    }
    const setFromText = (payload: string) => {
        dispatch({ type: 'SET_FROM_TEXT', payload })
    }
    const setResult = (payload: string) => {
        dispatch({ type: 'SET_RESULT', payload })
    }
    return {
        fromLanguage, toLanguage, fromText, result, loading, 
        interchangeLanguages, setFromLanguages, setToLanguages,
        setFromText, setResult
    }
}