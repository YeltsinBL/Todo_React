import React from "react"
import { TodoId, type ListOfTodos } from "../types"
import { Todo } from "./Todo"

interface Props {
    todos: ListOfTodos
    onRemoveTodo: ({ id } : TodoId  ) => void
}
// Pasar el parámetro por el Props y es de tipo genérico
// tipamos un FC (FunctionComponent)
export const Todos: React.FC<Props> = ({ todos, onRemoveTodo }) => {
    return(
        <ul className="todo-list">
            {todos.map(todo =>(
                <li key={todo.id} className={`${todo.completed?'completed':''}`}>
                    <Todo
                    key= {todo.id}
                    id= {todo.id}
                    title= {todo.title}
                    completed= {todo.completed}
                    onRemoveTodo = {onRemoveTodo}
                    />
                </li>
            ))}
        </ul>
    )
}
