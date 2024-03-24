import { FILTER_VALUE } from "../types"
import { Filters } from "./Filters"

interface Props{
    filterSelected: FILTER_VALUE
    handleFilterChange: (filter: FILTER_VALUE) => void
}

export const Footer: React.FC<Props> =({
      filterSelected, handleFilterChange
}) =>{
    return (
        <footer className="footer">
            <Filters
                filterSelected ={filterSelected}
                onFilterChange = {handleFilterChange}
            />
        </footer>
    )
}