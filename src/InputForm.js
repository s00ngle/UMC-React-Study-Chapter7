import { useDispatch } from "react-redux";
import { useRef, useState } from "react";
import { add_todo } from "./action";
import "./InputForm.css";

const InputForm = () => {
    const dispatch = useDispatch();

    const [text, setText] = useState("");
    const textinput = useRef(null);

    const handleChange = (e) => {
        const { value } = e.target;
        setText(value);
    };

    const handleClick = () => {
        if (text === "") {
            textinput.current.focus();
            return;
        }
        const todo = {
            title: text,
            isComplete: false,
        };
        dispatch(add_todo(todo));
        setText("");
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleClick();
        }
    };

    return (
        <div className="InputForm-Container">
            <input
                ref={textinput}
                className="InputForm-InputBox"
                type="text"
                placeholder="To Do..."
                value={text}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
            />
            <button className="InputForm-Button" onClick={handleClick}>
                +
            </button>
        </div>
    );
};

export default InputForm;
