import { useState } from 'react'
import { Todos } from './components/Todos'
import { FILTER_VALUE, TodoId , type Todo as TodoType} from './types'
import { TODO_FILTERS } from './const'
import { Footer } from './components/Footer'

const mockTodos = [
  {
    id: '1',
    title: 'Aprendiendo React',
    completed: true
  },
  {
    id: '2',
    title: 'Con TypeScript',
    completed: false
  },
  {
    id: '3',
    title: 'Guiado por Midudev',
    completed: false
  }
]

const App = (): JSX.Element => {
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
  }

  const filteredTodos = todos.filter( todo =>{
    if (filterSelected == TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected == TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  return (
    <div className='todoapp'>
      <Todos
        onToggleCompletedTodo ={handleCompleted}
        onRemoveTodo = {handleRemove}
        todos={filteredTodos} 
      />
      <Footer
        filterSelected= {filterSelected}
        handleFilterChange = {handleFilterChange}
      />
    </div>
  )
}

export default App
