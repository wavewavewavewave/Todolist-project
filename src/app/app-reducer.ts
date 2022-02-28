export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

// status === 'loading', крутилка есть
// status === 'idle' | 'succeeded' | 'failed', крутилку убираем

const initialState = {
    status: 'loading' as RequestStatusType
}

type InitialStateType = typeof initialState


export type AppReducerType = ReturnType<typeof appReducer>
export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        default:
            return state
    }
}

type ActionsType = any