import axios from "axios";

type SettingsType = {
    withCredentials: boolean
    headers: HeadersType
}
type HeadersType = {
    'API-KEY': string
}

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': '911248f0-1866-498d-84bc-ce9553ace487'
    }
})

export const todolistApi = {
    getTodos() {
        return instance.get('todo-lists')
    },

    createTodos(title: string) {
        return instance.post('todo-lists', {title})
    },

    deleteTodos(todolistId: string) {
        return instance.delete(`todo-lists/${todolistId}`)
    },

    updateTodolist(todolistId: string, title: string) {
        return instance.put(`todo-lists/${todolistId}`, {title})
    }

}