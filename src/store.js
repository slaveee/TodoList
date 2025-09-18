import { configureStore } from '@reduxjs/toolkit'
import todosReducer from './features/todos/todosSlice'
import authReducer from './features/auth/authSlice'

const KEY = "redux";

export function loadState() {
    try {
        const serializedState = localStorage.getItem(KEY);
        if (!serializedState) return undefined;
        return JSON.parse(serializedState);
    } catch (e) {
        return undefined;
    }
}

export async function saveState(state) {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(KEY, serializedState);
    } catch (e) {
        // Ignore
    }
}

export const store = configureStore({
    reducer: {
        todos: todosReducer,
        auth: authReducer
    },
    preloadedState: loadState()
})

store.subscribe(() => {
const reduxStore = store.getState()

    if (reduxStore.auth.token === null ) {
        localStorage.clear()
        return;
    }

    saveState(store.getState())
})