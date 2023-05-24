import { useDispatch } from "react-redux";
import { useRef, useState } from "react";
import { add_todo } from "./action";
// import "./InputForm.css";
import * as S from "./InputForm.styles";

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
        <S.Container>
            <S.InputBox
                ref={textinput}
                className="InputForm-InputBox"
                type="text"
                placeholder="To Do..."
                value={text}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
            />
            <S.Button onClick={handleClick}>+</S.Button>
        </S.Container>
    );
};

export default InputForm;
