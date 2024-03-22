export interface Todo {
    id: string
    title: string
    completed: boolean
}

// Utility Types: obtener los tipos
export type TodoId = Pick<Todo, 'id'>
export type TodoTitle = Pick<Todo, 'title'>
export type TodoCompleted = Pick<Todo, 'completed'>


export type ListOfTodos = Todo[]
