import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { resetTodos } from "../features/todos/todosSlice";

const Todo = () => {
    const [inputValue, setInputValue] = useState("")
    const todos = useSelector(state => state.todos.todos)

    const dispatch = useDispatch()

    const handlelogout = () => {
        dispatch(resetTodos())
        dispatch(logout())
    }

    return <div className="todo">
        <button onClick={handlelogout} className= "btn">Logout</button>
        <AddTodo inputValue={inputValue} setInputValue={setInputValue} />
        <TodoList todos={todos} />
    </div>
}

export default Todo;