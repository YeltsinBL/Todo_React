import React, { useState } from "react"
import { TodoId, type ListOfTodos, type Todo as TodoType } from "../types"
import { Todo } from "./Todo"

interface Props {
    todos: ListOfTodos
    onToggleCompletedTodo: ({id, completed}: Pick<TodoType, 'id' | 'completed'>) => void
    onRemoveTodo: ({ id } : TodoId  ) => void
    onUpdateTodo:({id, title}: Pick<TodoType, 'id' | 'title'>) => void
}
// Pasar el parámetro por el Props y es de tipo genérico
// tipamos un FC (FunctionComponent)
export const Todos: React.FC<Props> = ({ todos, onToggleCompletedTodo, onRemoveTodo, onUpdateTodo}) => {
    const [isEditing, setIsEditing]= useState('')
    return(
        <ul className="todo-list">
            {todos.map(todo =>(
                <li key={todo.id} 
                    className={`
                        ${todo.completed ? 'completed' : ''}
                        ${isEditing === todo.id ? 'editing' : ''}
                    `}
                    onDoubleClick={()=>{setIsEditing(todo.id)}}
                >
                    <Todo
                    key= {todo.id}
                    id= {todo.id}
                    title= {todo.title}
                    completed= {todo.completed}
                    onToggleCompletedTodo = {onToggleCompletedTodo}
                    onRemoveTodo = {onRemoveTodo}
                    updateTodo={onUpdateTodo}
                    isEditing={isEditing}
                    setIsEditing={setIsEditing}
                    />
                </li>
            ))}
        </ul>
    )
}
