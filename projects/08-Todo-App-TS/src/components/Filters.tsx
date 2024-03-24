import { FILTERS_BUTTON } from "../const"
import { FILTER_VALUE } from "../types"

interface Props{
    filterSelected: FILTER_VALUE,
    onFilterChange: (filter: FILTER_VALUE) => void
}

export const Filters: React.FC<Props> = ({
    filterSelected, onFilterChange
}) => {

    return (
        <ul className="filters">
            {
                // Convertimos el objeto FILTERS_BUTTON a un array
                Object.entries(FILTERS_BUTTON).map(([key, {literal, href}]) =>{
                    const isSelected = key === filterSelected
                    const className = isSelected ? 'selected':''
                    return (
                        <li key={key}>
                            <a 
                                className={className} 
                                href={href}
                                onClick={(event) =>{
                                    event.preventDefault()
                                    onFilterChange(key as FILTER_VALUE)
                                }}
                            >
                                {literal}
                            </a>
                        </li>
                    )
                })
            }
        </ul>
    )
}