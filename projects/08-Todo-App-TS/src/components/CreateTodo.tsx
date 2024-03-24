import { useState } from "react"

interface Props {
}

export const CreateTodo: React.FC<Props> = () =>{
    const [inputValue, setInputValue] = useState('')


    return(
        <form>
            <input 
                className="new-todo"
                value={inputValue}
                onChange={(event) => { setInputValue(event.target.value) } }
                placeholder="Qué quiere hacer?"
                autoFocus
            />

        </form>
    )
}