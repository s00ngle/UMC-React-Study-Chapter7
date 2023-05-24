import { useSelector } from "react-redux";
// import "./App.css";
import * as S from "./App.styles";
import InputForom from "./InputForm";
import TodoList from "./TodoList";

function App() {
    const todos = useSelector((state) => state.todos);

    return (
        <div className="App">
            {/* <div className="App-Container">
                <div className="App-Wrapper"> */}
            <S.Container>
                <S.Wrapper>
                    <h1>Redux Todo List</h1>
                    <InputForom />
                    {todos.length > 0 ? <TodoList /> : ""}
                </S.Wrapper>
            </S.Container>
            {/* </div>
            </div> */}
        </div>
    );
}

export default App;
