import {setAppErrorAC, SetAppErrorACType, setAppStatusReducerAC} from "../app/app-reducer";
import {Dispatch} from "redux";


//type ErrorUtilsDispatchType = Dispatch<SetAppErrorActionType | SetAppStatusActionType>
export const handleServerNetworkError = (dispatch: Dispatch<SetAppErrorACType | ReturnType<typeof setAppStatusReducerAC>>, message: string) => {
    dispatch(setAppErrorAC(message))
    dispatch(setAppStatusReducerAC('failed'))
}