import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/todosSlice";

function AddTodo({ inputValue, setInputValue, setTodos }) {
    const dispatch = useDispatch()

    return <div className="add-todo-container">
        <input placeholder="Create New Todo..." value={inputValue} onChange={(event) => {
            setInputValue(event.target.value)
        }} />

        <button className="add-todo-btn" onClick={() => {
            if (!inputValue) {
                alert("No Value...")
                return;
            }

            dispatch(addTodo(inputValue))
            setInputValue("")
        }}>Add Todo</button>
    </div>
}

export default AddTodo;