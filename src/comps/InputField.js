import { React } from "react";

function InputField({ text, addTodo, handleText }) {
  return (
    <div className="list-align">
      <p>TODO:</p>
      <label>
        <input
          value={text}
          onChange={(e) => handleText(e.target.value)}
        ></input>
        <button onClick={addTodo}>Add</button>
      </label>
    </div>
  );
}

export default InputField;
