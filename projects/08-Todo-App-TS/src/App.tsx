import { useState } from 'react'
import { Todos } from './components/Todos'
import { TodoId } from './types'

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

  const handleRemove = ({ id } : TodoId) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }
  
  return (
    <div className='todoapp'>
      <Todos 
        onRemoveTodo = {handleRemove}
        todos={todos} 
      />
    </div>
  )
}

export default App
