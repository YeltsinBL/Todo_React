import React from "react"
import { type ListOfTodos } from "../types"

interface Props {
    todos: ListOfTodos
}
// Pasar el parámetro por el Props y es de tipo genérico
// tipamos un FC (FunctionComponent)
export const Todos: React.FC<Props> = ({ todos }) => {
    return(
        <ul>
            {todos.map(todo =>(
                <li key={todo.id}>
                    {todo.title}
                </li>
            ))}
        </ul>
    )
}
