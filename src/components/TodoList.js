import { useDispatch } from "react-redux"
import { deleteTodo, handleCheckTodo } from "../features/todos/todosSlice"

const TodoList = ({ todos, setTodos }) => {
    const dispatch = useDispatch()

    return <ul className="todo-list">
        {todos.map((todo, idx) => <li key={idx} className="todo-item">
            <input type="checkbox" checked={todo.done} value={todo.done} onChange={() => {
                dispatch(handleCheckTodo(todo))
            }} />

            <span className={`${todo.done ? "status-done" : ""}`}>{todo.title}</span>

            <button className = "btn delete-btn"onClick={() => {
                dispatch(deleteTodo(todo.id))
            }}>X</button>
        </li>)}
    </ul>
}

export default TodoList