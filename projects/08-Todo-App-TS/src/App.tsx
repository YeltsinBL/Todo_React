import { useState } from 'react'
import { Todos } from './components/Todos'
import { FILTER_VALUE, TodoId , TodoTitle, type Todo as TodoType} from './types'
import { TODO_FILTERS } from './const'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

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

  return (
    <div className='todoapp'>
      <Header 
        onAddTodo={handleAddTodo}
      />
      <Todos
        onToggleCompletedTodo ={handleCompleted}
        onRemoveTodo = {handleRemove}
        todos={filteredTodos} 
      />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected= {filterSelected}
        handleFilterChange = {handleFilterChange}
        onClearCompleted = {handleRemoveCompleted}
      />
    </div>
  )
}

export default App
