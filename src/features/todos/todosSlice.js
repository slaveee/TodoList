import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todos: []
}

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos = [...state.todos, {
                id: Date.now() + Math.random(),
                title: action.payload,
                done: false
            }]
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(el => el.id !== action.payload)
        },
        handleCheckTodo: (state, action) => {
            state.todos = state.todos.map(el => {
                if (el.id === action.payload.id) {
                    return { ...el, done: !el.done }
                }
                return el
            })
        },
        resetTodos: (state) => {
            state.todos = []
        }

    },
})

export const { addTodo, deleteTodo, handleCheckTodo, resetTodos } = todosSlice.actions

export default todosSlice.reducer