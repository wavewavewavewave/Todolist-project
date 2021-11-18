import {FilterValuesType, TasksStateType, TodolistType} from '../App';
import {v1} from 'uuid';
import {type} from "os";

export type RemoveTaskActionType = {
    type: 'REMOVE-TASK',
    taskId: string,
    todolistId: string
}
export type AddTaskActionType = {
    type: 'ADD-TASK',
    title: string,
    todolistId: string
}
export type ChangeTaskStatusActionType = {
    type: 'CHANGE-TASK-STATUS',
    id: string,
    isDone: boolean,
    todolistId: string
}
export type ChangeTaskTitleActionType = {
    type: 'CHANGE-TASK-TITLE'
    taskId: string,
    title: string,
    todolistId: string
}

type ActionsType = RemoveTaskActionType
    | AddTaskActionType
    | ChangeTaskStatusActionType
    | ChangeTaskTitleActionType;

export const tasksReducer = (state: TasksStateType, action: ActionsType) => {
    switch (action.type) {
        case 'REMOVE-TASK':
            /*let newTask = state[action.todolistId]
                .filter(task => task.id !== action.taskId)*/
            return {
                ...state, [action.todolistId]: state[action.todolistId]
                    .filter(task => task.id !== action.taskId)
            }
        case 'ADD-TASK':
            return {
                ...state, [action.todolistId]: [{id: v1(), title: action.title, isDone: false},
                    ...state[action.todolistId]]
            }
        case 'CHANGE-TASK-STATUS':
            return {
                ...state, [action.todolistId]: state[action.todolistId]
                    .map(m => m.id === action.id ? {...m, isDone: action.isDone} : m)
            }
        case 'CHANGE-TASK-TITLE':
            return {...state, [action.todolistId]: state[action.todolistId]
                    .map(task => task.id === action.taskId ? {...task, title: action.title} : task)}
                default:
                    throw new Error("I don't understand this type")
            }
    }


    export const removeTaskAC = (taskId: string, todolistId: string): RemoveTaskActionType => {
        return {
            type: 'REMOVE-TASK',
            taskId,
            todolistId
        } as const
    }
    export const addTaskAC = (title: string, todolistId: string): AddTaskActionType => {
        return {
            type: 'ADD-TASK',
            title,
            todolistId,
        } as const
    }
    export const changeTaskStatusAC = (id: string, isDone: boolean, todolistId: string): ChangeTaskStatusActionType => {
        return {
            type: 'CHANGE-TASK-STATUS',
            id,
            isDone,
            todolistId
        } as const
    }
    export const changeTaskTitleAC = (taskId: string, title: string, todolistId: string): ChangeTaskTitleActionType => {
        return {
            type: 'CHANGE-TASK-TITLE',
            taskId,
            title,
            todolistId
        }
    }

