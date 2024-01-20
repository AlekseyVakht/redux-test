import "./App.scss";
import { React, useState } from "react";
import TodoList from "./comps/TodoList";
import InputField from "./comps/InputField";
import { useDispatch } from "react-redux";
import { addTodo } from "./store/todoSlice";

function App() {
  const [text, setText] = useState("");
  const disp = useDispatch();

  const addDeal = () => {
    disp(addTodo(text));
    setText('');
  };

  return (
    <div className="container">
      <InputField text={text} addTodo={addDeal} handleText={setText} />
      <TodoList className="list"
      />
    </div>
  );
}

export default App;
