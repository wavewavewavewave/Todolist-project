import {setAppErrorAC, SetAppErrorACType, setAppStatusReducerAC} from "../app/app-reducer";
import {Dispatch} from "redux";
import {ResponseType} from "../api/todolists-api";


//type ErrorUtilsDispatchType = Dispatch<SetAppErrorActionType | SetAppStatusActionType>
export const handleServerNetworkError = (dispatch: Dispatch<SetAppErrorACType | ReturnType<typeof setAppStatusReducerAC>>, message: string) => {
    dispatch(setAppErrorAC(message))
    dispatch(setAppStatusReducerAC('failed'))
}

export const handleServerAppError = <T>(dispatch: Dispatch<SetAppErrorACType | ReturnType<typeof setAppStatusReducerAC>>, data: ResponseType<T>) => {
    if (data.messages.length) {
        dispatch(setAppErrorAC(data.messages[0]))
    } else {
        dispatch(setAppErrorAC('Some error occured'))
    }
    dispatch(setAppStatusReducerAC('failed'))
}