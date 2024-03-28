import { useEffect, useRef, useState } from "react"
import { type Todo as TodoType } from "../types"

interface Props extends TodoType {
    onToggleCompletedTodo: (id: string, completed: boolean) => void
    onRemoveTodo: ( id: string ) => void
    updateTodo: (id: string, title: string) => void
    isEditing: string
    setIsEditing: (completed: string) => void
}

export const Todo:React.FC<Props> = (
    { id, title, completed, onToggleCompletedTodo, onRemoveTodo, 
        updateTodo, isEditing, setIsEditing
    }
    ) => {
    const handleCompletedTodoCheck = (event : React.ChangeEvent<HTMLInputElement>):void =>{
        onToggleCompletedTodo(id, event.target.checked)
    }

    const [editingTitle, setEditingTitle] = useState(title)
    const inputEditTitle = useRef<HTMLInputElement>(null)

    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) =>{
        if(e.key==='Enter'){
            setEditingTitle(editingTitle.trim())

            if (editingTitle !== title) updateTodo(id, editingTitle)
            if (editingTitle === '') onRemoveTodo(id)
            
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
                    onRemoveTodo(id )}
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