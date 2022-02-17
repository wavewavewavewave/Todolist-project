import axios from "axios";

type SettingsType = {
    withCredentials: boolean
    headers: HeadersType
}
type HeadersType = {
    'API-KEY': string
}
export type ToDoType = {
    id: string,
    addedDate: string,
    order: number,
    title: string,
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

type ResponseType<T = {} > = {
    fieldsErrors: string []
    messages: string []
    resultCode: number
    data: T
}

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': '85c458b3-9464-4beb-9450-5ce13a35aab2'
    }
})

export const todolistApi = {
    getTodos() {
        return instance.get<ToDoType[]>('todo-lists')
    },

    createTodos(title: string) {
        return instance.post<ResponseType<{ item: ToDoType }>>('todo-lists', {title})
    },

    deleteTodos(todolistId: string) {
        return instance.delete<ResponseType>(`todo-lists/${todolistId}`)
    },

    updateTodolist(params: {todolistId: string, title: string}) {
        return instance.put<ResponseType>(`todo-lists/${params.todolistId}`, {title: params.title})
    }

}