export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

export type NullableType<T> = null | T

const initialState = {
    status: 'loading' as RequestStatusType,
    error: null as string | NullableType<string>
}

type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        case "APP/SET-ERROR":
            return {...state, error: action.error}
        default:
            return state
    }
}

type ActionsType = ReturnType<typeof setAppStatusReducerAC>
    | SetAppErrorACType


export const setAppStatusReducerAC = (status: RequestStatusType) => {
    return {
        type: 'APP/SET-STATUS',
        status,
    } as const
}
export type SetAppErrorACType = ReturnType<typeof setAppErrorAC>
export const setAppErrorAC = (error: string | null) => {
    return {
        type: 'APP/SET-ERROR',
        error
    } as const
}
