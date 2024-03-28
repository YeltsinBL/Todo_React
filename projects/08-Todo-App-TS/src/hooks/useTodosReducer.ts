import { useReducer } from "react"
import { TODO_FILTERS } from "../const"
import { FILTER_VALUE, ListOfTodos } from "../types"

type Action =
  | { type: 'INIT_TODOS', payload: { todos: ListOfTodos } }
  | { type: 'CLEAR_COMPLETED' }
  | { type: 'COMPLETED', payload: { id: string, completed: boolean } }
  | { type: 'FILTER_CHANGE', payload: { filter: FILTER_VALUE } }
  | { type: 'REMOVE', payload: { id: string } }
  | { type: 'SAVE', payload: { title: string } }
  | { type: 'UPDATE_TITLE', payload: { id: string, title: string } }

interface State {
  sync: boolean // si hay un cambio en los datos de la lista es true
  todos: ListOfTodos
  filterSelected: FILTER_VALUE
}

const initialState = {
    sync: false,
    todos: [],
    filterSelected: (() => {
      // Lee el query param de la url usando URLSearchParams
      const params = new URLSearchParams(window.location.search)
      // obtenemos el valor del parámetro filter
      const filter = params.get('filter') as FILTER_VALUE | null
      // verificar si el existe el param filter
      if (filter === null) return TODO_FILTERS.ALL
      // Verificar si el valor obtenido pertenece a los filtros
      // sino devuelve ALL
      return Object
        .values(TODO_FILTERS)
        .includes(filter)
        ? filter
        : TODO_FILTERS.ALL
    })()
}

const reducer = (state:State, action: Action): State => {
  if(action.type === 'INIT_TODOS'){
    const { todos } = action.payload
    return {
        ...state,
        sync:false,
        todos
    }
  }

  if(action.type === 'CLEAR_COMPLETED'){
    return {
        ...state,
        sync: true,
        todos: state.todos.filter(todo => !todo.completed)
    }
  }

  if(action.type === 'COMPLETED'){
    const { id, completed } = action.payload
    return {
        ...state,
        sync: true,
        todos: state.todos.map(todo =>{
            if(todo.id === id){
                return {
                    ...todo,
                    completed
                }
            }
            return todo
        })
    }
  }

  if(action.type === 'FILTER_CHANGE'){
    const { filter } = action.payload
    return {
        ...state,
        sync:true,
        filterSelected: filter
    }
  }

  if(action.type === 'REMOVE'){
    const { id } = action.payload
    return {
        ...state,
        sync:true,
        todos: state.todos.filter(todo => todo.id !== id)
    }
  }

  if(action.type === 'SAVE'){
    const { title } = action.payload
    const newTodo = {
        id:crypto.randomUUID(),
        title:title,
        completed:false
    }
    return {
        ...state,
        sync:true,
        todos: [...state.todos, newTodo]
        }
  }
  
  if(action.type === 'UPDATE_TITLE'){
    const { id, title } = action.payload

    return {
        ...state,
        sync:true,
        todos: state.todos.map(todo =>{
            if(todo.id === id){
                return {
                    ...todo,
                    title
                }
            }
            return todo
        })
    }
  }

  return state
}

export const useTodos =():{
  handleAddTodo: (title:string)=>void,
  handleCompleted: (id:string, completed:boolean) =>void,
  handleRemove: (id:string)=>void,
  filteredTodos: ListOfTodos, 
  handleUpdateTodo: (id: string, title: string)=>void,
  activeCount: number, completedCount: number,
  filterSelected: FILTER_VALUE,
  handleFilterChange: (filter: FILTER_VALUE) => void,
  handleRemoveCompleted: () => void
} =>{
    const [{ sync, todos, filterSelected}, dispatch] = useReducer(reducer, initialState)

    const handleAddTodo = ( title : string ) => {
        dispatch({type:'SAVE', payload:{title}})
    }
    const handleCompleted = (id: string, completed: boolean) => {
        dispatch({type:'COMPLETED', payload:{id, completed}})
    }
    const handleRemove = (id: string) => {
        dispatch({type:'REMOVE', payload:{id}})
    }
    const filteredTodos = todos.filter(todo =>{
        if(filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
        if(filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
        return todo
    })
    const handleUpdateTodo = (id: string, title: string) => {
        dispatch({type:'UPDATE_TITLE', payload:{id, title}})
    }

    const activeCount = todos.filter(todo => !todo.completed).length
    const completedCount = todos.length - activeCount
    
    const handleFilterChange = (filter: FILTER_VALUE) => {
        dispatch({type:'FILTER_CHANGE', payload:{filter}})
        // Agregar en la URL el filtro seleccionado
        const params = new URLSearchParams(window.location.search)
        params.set('filter', filter)
        window.history.pushState({},'',`${window.location.pathname}?${params.toString()}`)
    }
    const handleRemoveCompleted = () => {
        dispatch({type:'CLEAR_COMPLETED'})
    }
    return { 
        handleAddTodo, handleCompleted, handleRemove,
        filteredTodos, handleUpdateTodo, activeCount, completedCount, filterSelected,
        handleFilterChange, handleRemoveCompleted
    }
}