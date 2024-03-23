import React from "react"
import { TodoId, type ListOfTodos, type Todo as TodoType } from "../types"
import { Todo } from "./Todo"

interface Props {
    todos: ListOfTodos
    onToggleCompletedTodo: ({id, completed}: Pick<TodoType, 'id' | 'completed'>) => void
    onRemoveTodo: ({ id } : TodoId  ) => void
}
// Pasar el parámetro por el Props y es de tipo genérico
// tipamos un FC (FunctionComponent)
export const Todos: React.FC<Props> = ({ todos, onToggleCompletedTodo, onRemoveTodo }) => {
    return(
        <ul className="todo-list">
            {todos.map(todo =>(
                <li key={todo.id} className={`${todo.completed?'completed':''}`}>
                    <Todo
                    key= {todo.id}
                    id= {todo.id}
                    title= {todo.title}
                    completed= {todo.completed}
                    onToggleCompletedTodo = {onToggleCompletedTodo}
                    onRemoveTodo = {onRemoveTodo}
                    />
                </li>
            ))}
        </ul>
    )
}
