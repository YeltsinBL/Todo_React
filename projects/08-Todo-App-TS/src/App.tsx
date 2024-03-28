import { Todos } from './components/Todos'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { useTodos } from './hooks/useTodosReducer'

const App: React.FC = () => {
  const { 
    handleAddTodo, handleCompleted, handleRemove,
    filteredTodos, handleUpdateTodo, activeCount, completedCount, filterSelected,
    handleFilterChange, handleRemoveCompleted 
  } = useTodos()

  return (
    <>
    <div className='todoapp'>
      <Header 
        onAddTodo={handleAddTodo}
        />
      <Todos
        onToggleCompletedTodo ={handleCompleted}
        onRemoveTodo = {handleRemove}
        todos={filteredTodos}
        onUpdateTodo={handleUpdateTodo}
        />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected= {filterSelected}
        handleFilterChange = {handleFilterChange}
        onClearCompleted = {handleRemoveCompleted}
        />
    </div>
        </>
  )
}

export default App
