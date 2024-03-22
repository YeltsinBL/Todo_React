import React from "react"
import { type ListOfTodos } from "../types"
import { Todo } from "./Todo"

interface Props {
    todos: ListOfTodos
}
// Pasar el parámetro por el Props y es de tipo genérico
// tipamos un FC (FunctionComponent)
export const Todos: React.FC<Props> = ({ todos }) => {
    return(
        <ul className="todo-list">
            {todos.map(todo =>(
                <li key={todo.id} className={`${todo.completed?'completed':''}`}>
                    <Todo
                    key= {todo.id}
                    id= {todo.id}
                    title= {todo.title}
                    completed= {todo.completed}
                    />
                </li>
            ))}
        </ul>
    )
}
