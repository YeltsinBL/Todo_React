import { TODO_FILTERS } from "./const"

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

// indica que utilice una key del TODO_FILTERS, luego obtenemos el typeof de ese valor
export type FILTER_VALUE = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]