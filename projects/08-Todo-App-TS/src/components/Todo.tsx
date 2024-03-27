import { useEffect, useRef, useState } from "react"
import { TodoId, type Todo as TodoType } from "../types"

interface Props extends TodoType {
    onToggleCompletedTodo: ({id, completed}: Pick<TodoType, 'id' | 'completed'>) => void
    onRemoveTodo: ({ id } : TodoId ) => void
    updateTodo: ({id, title}: Pick<TodoType, 'id' | 'title'>) => void
    isEditing: string
    setIsEditing: (completed: string) => void
}

export const Todo:React.FC<Props> = (
    { id, title, completed, onToggleCompletedTodo, onRemoveTodo, 
        updateTodo, isEditing, setIsEditing
    }
    ) => {
    const handleCompletedTodoCheck = (event : React.ChangeEvent<HTMLInputElement>):void =>{
        onToggleCompletedTodo({id, completed:event.target.checked})
    }

    const [editingTitle, setEditingTitle] = useState(title)
    const inputEditTitle = useRef<HTMLInputElement>(null)

    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) =>{
        if(e.key==='Enter'){
            setEditingTitle(editingTitle.trim())

            if (editingTitle !== title) updateTodo({id, title: editingTitle})
            if (editingTitle === '') onRemoveTodo({id})
            
            setIsEditing('')
        }
        if (e.key === 'Escape') {
            setEditingTitle(title)
            setIsEditing('')
        }
    }

    // Al hacer doble click, poner el cursor en el input
    useEffect(() => {
        inputEditTitle.current?.focus()
    },[isEditing])

    return (<>
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
        <input 
            className="edit"
            value={editingTitle}
            onChange={(e) => { setEditingTitle(e.target.value) }}
            onKeyDown={handleKeyDown}
            onBlur={() => { setIsEditing('') }}
            ref={inputEditTitle}
        />
    </>)
}