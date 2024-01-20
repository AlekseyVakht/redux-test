import { React } from "react";
import { removeTodo, toggleTodoDone } from "../store/todoSlice";
import { useDispatch } from "react-redux";

function TodoItem({ todos }) {
  const disp = useDispatch();

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} className={`${!todo.completed ? "" : "scored"}`}>
          {todo.text}
          <div>
            <p onClick={() => disp(removeTodo(todo.id))}>✕</p>
            <p onClick={() => disp(toggleTodoDone(todo.id))}>✓</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoItem;
