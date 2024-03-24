import { FILTER_VALUE } from "../types"
import { Filters } from "./Filters"

interface Props{
    activeCount: number
    filterSelected: FILTER_VALUE
    handleFilterChange: (filter: FILTER_VALUE) => void
}

export const Footer: React.FC<Props> =({
    activeCount = 0,  filterSelected, handleFilterChange
}) =>{
    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{activeCount}</strong> tareas pendientes
            </span>
            <Filters
                filterSelected ={filterSelected}
                onFilterChange = {handleFilterChange}
            />
        </footer>
    )
}