import axios from "axios";

type SettingsType = {
    withCredentials: boolean
    headers: HeadersType
}
type HeadersType = {
    'API-KEY': string
}


export const todolistApi = {
    getTodos(settings: SettingsType) {
        let promise = axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists', settings)
        return promise
    },

    createTodos(title: string, settings: SettingsType) {
        let promise = axios.post('https://social-network.samuraijs.com/api/1.1/todo-lists', {title}, settings)
        return promise
    },

    deleteTodos(todolistId: string, settings: SettingsType) {
        let promise = axios.delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, settings)
        return promise
    },

    updateTodolist(todolistId: string, settings: SettingsType, title: string) {
        let promise = axios.put(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, {title} ,settings)
        return promise
    }

}