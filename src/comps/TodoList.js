import { React } from "react";
import TodoItem from "./TodoItem";
import { useSelector } from 'react-redux';

function TodoList() {
  const todos = useSelector(state => state.todos.todos);
  return (
    <div className="container">
      <div className="list">
        <TodoItem
          todos={todos}
        />
      </div>
    </div>
  );
}

export default TodoList;
