import { useState } from "react"
import { FILTER_VALUE, TodoId, TodoTitle, type Todo as TodoType } from "../types"
import { TODO_FILTERS } from "../const"
import { mockTodos } from "../mocks/Todos"

export function useTodos(){
  const [todos, setTodos]=useState(mockTodos)
  // uso del useState para obtener un estado genérico
  const [filterSelected, setFilterSelected] = useState<FILTER_VALUE>(TODO_FILTERS.ALL)

  const handleRemove = ({ id } : TodoId) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = (
    {id, completed}: Pick<TodoType, 'id' | 'completed'>
  ):void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id){
        return {
          ...todo,
          completed
        }
      }
      return todo
    })
    setTodos(newTodos)
  }
  
  const handleFilterChange = (filter:FILTER_VALUE):void => {
    setFilterSelected(filter)
    // Agregar en la URL el filtro seleccionado
    const params = new URLSearchParams(window.location.search)
    params.set('filter', filter)
    window.history.pushState({},'',`${window.location.pathname}?${params.toString()}`)
  }

  const handleRemoveCompleted = (): void =>{
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount

  const filteredTodos = todos.filter( todo =>{
    if (filterSelected == TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected == TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  const handleAddTodo = ({title}: TodoTitle) : void => {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false
    }
    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  }

  const handleUpdateTodo = ({id, title}:Pick<TodoType, 'id' | 'title'>): void =>{
    const newTodos = todos.map(todo =>{
      if (todo.id === id) {
        return {
          ...todo,
          title
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  return { 
    handleAddTodo, handleCompleted, handleRemove,
    filteredTodos, handleUpdateTodo, activeCount, completedCount, filterSelected,
    handleFilterChange, handleRemoveCompleted
  }
}