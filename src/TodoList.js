import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = () => {
    const todos = useSelector((state) => state.todos);

    return (
        <div className="TodoList-Container">
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </div>
    );
};

export default TodoList;
