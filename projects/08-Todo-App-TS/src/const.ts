export const TODO_FILTERS ={
    ALL: 'all',
    ACTIVE: 'active',
    COMPLETED: 'completed'
} as const // se agrega esto para indicar a TS que es de solo lectura

export const FILTERS_BUTTON = {
    [TODO_FILTERS.ALL]: {
        literal: 'Todos',
        href: `/?filter=${TODO_FILTERS.ALL}`
    },
    [TODO_FILTERS.ACTIVE]: {
        literal: 'Activos',
        href: `/?filter=${TODO_FILTERS.ACTIVE}`
    },
    [TODO_FILTERS.COMPLETED]: {
        literal: 'Completados',
        href: `/?filter=${TODO_FILTERS.COMPLETED}`
    },
} as const
