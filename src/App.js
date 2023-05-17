import { useSelector } from "react-redux";
import "./App.css";
import InputForom from "./InputForm";
import TodoList from "./TodoList";

function App() {
    const todos = useSelector((state) => state.todos);
    console.log(todos.length);
    return (
        <div className="App">
            <div className="App-Container">
                <div className="App-Wrapper">
                    <h1>Redux Todo List</h1>
                    <InputForom />
                    {todos.length > 0 ? <TodoList /> : ""}
                </div>
            </div>
        </div>
    );
}

export default App;
