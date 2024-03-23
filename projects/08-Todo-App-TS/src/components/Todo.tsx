import React from "react"
import { TodoId, type Todo as TodoType } from "../types"

interface Props extends TodoType {
    onToggleCompletedTodo: ({id, completed}: Pick<TodoType, 'id' | 'completed'>) => void
    onRemoveTodo: ({ id } : TodoId ) => void
}

export const Todo:React.FC<Props> = ({ id, title, completed, onToggleCompletedTodo, onRemoveTodo}) => {
    const handleCompletedTodoCheck = (event : React.ChangeEvent<HTMLInputElement>):void =>{
        onToggleCompletedTodo({id, completed:event.target.checked})
    }
    return (
        <div className="view">
            <input type="checkbox"
            className="toggle"
            checked={completed}
            onChange={handleCompletedTodoCheck} />
            <label> {title} </label>
            <button 
                className="destroy"
                onClick={() => {
                    onRemoveTodo({ id })}
                }
            />
        </div>
    )
}