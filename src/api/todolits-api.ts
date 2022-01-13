import axios from "axios";

type SettingsType = {
    withCredentials: boolean
    headers: HeadersType
}
type HeadersType = {
    'API-KEY': string
}
type ToDoType = {
    id: string
    addedDate: string
    order: number
    title: string
}
type CreateToDoType = {
    data: {
        item: ToDoType
    }
    fieldsErrors: string []
    messages: string []
    resultCode: number
}
type DeleteToDoType = {
    data: {}
    fieldsErrors: string []
    messages: string []
    resultCode: number
}
type UpdateToDoType = {
    data: {}
    fieldsErrors: string []
    messages: string []
    resultCode: number
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
        return instance.get<Array<ToDoType>>('todo-lists')
    },

    createTodos(title: string) {
        return instance.post<CreateToDoType>('todo-lists', {title})
    },

    deleteTodos(todolistId: string) {
        return instance.delete<DeleteToDoType>(`todo-lists/${todolistId}`)
    },

    updateTodolist(params: {todolistId: string, title: string}) {
        return instance.put<UpdateToDoType>(`todo-lists/${params.todolistId}`, {title: params.title})
    }

}