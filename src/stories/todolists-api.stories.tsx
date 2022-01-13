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
        todolistApi.getTodos().then((res) => {
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
       todolistApi.createTodos(title).then((res) => {
            setState(res.data)
        })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'dae12be4-12c1-40ef-9788-55c14ff7d5d3'
      todolistApi.deleteTodos(todolistId).then((res) => {
            setState(res.data)
        })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '5657cd56-fa04-433c-a4cb-0daa11f85450'
        const title = '12345'
       todolistApi.updateTodolist({todolistId, title}).then((res) => {
            setState(res.data)
        })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
