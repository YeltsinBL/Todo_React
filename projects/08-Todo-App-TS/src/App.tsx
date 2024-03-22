import { useState } from 'react'
import { Todos } from './components/Todos'

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
  const [todo, setTodo]=useState(mockTodos)
  
  return (
    <div className='todoapp'>
      <Todos todos={todo} />
    </div>
  )
}

export default App
