import { useDispatch } from "react-redux";
import { delete_todo } from "./action";
import "./TodoItem.css";

const TodoItem = ({ todo }) => {
    const dispatch = useDispatch();

    const { id, title, isComplete } = todo;

    const handleClick = () => {
        dispatch(delete_todo(id));
    };

    return (
        <div className="TodoItem-Container">
            <div className="TodoItem-TextColumn">
                <span>{title}</span>
                <button onClick={handleClick}> {isComplete || "X"} </button>
            </div>
        </div>
    );
};

export default TodoItem;
