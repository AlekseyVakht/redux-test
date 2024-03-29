import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload,
        completed: false,
      });
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
    },
    toggleTodoDone(state, action) {
      const toggledTodo = state.todos.find(todo => todo.id === action.payload)
      toggledTodo.completed = !toggledTodo.completed;
    },
  },
});

export const {addTodo, removeTodo, toggleTodoDone} = todoSlice.actions;

export default todoSlice.reducer;