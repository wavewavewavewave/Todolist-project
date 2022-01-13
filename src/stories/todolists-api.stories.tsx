import React, {useEffect, useState} from 'react'
import axios from "axios";
import {todolistApi} from "../api/todolits-api";


export default {
    title: 'API'
}
 const settings = {
    withCredentials: true,
    headers: {
        'API-KEY': '911248f0-1866-498d-84bc-ce9553ace487'
    }
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistApi.getTodos(settings).then((res) => {
           const todos = res.data
            setState(todos)
        })
        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        let title = 'RRRRRRRRRRRRRRRRR'
       todolistApi.createTodos(title, settings).then((res) => {
            setState(res.data)
        })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '9cc67643-8dcd-4b86-a886-4ffd37b789d9'
      todolistApi.deleteTodos(todolistId, settings).then((res) => {
            setState(res.data)
        })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'ff1352e0-aa4b-4665-998d-ba1d2e7359fc'
        const title = '12345'
       todolistApi.updateTodolist(todolistId, settings, title).then((res) => {
            setState(res.data)
        })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
