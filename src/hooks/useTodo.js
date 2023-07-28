import { useReducer, useEffect } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const initialState = [];
const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};
export const useTodo = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onNewTodo = (onNewTodo) => {
    const action = {
      type: "todo App",
      payload: onNewTodo,
    };

    dispatch(action);
  };

  const removeTodo = (id) => {
    dispatch({
      type: "todo Remove",
      payload: id,
    });
  };

  const onToggleTodo = (todo) => {
    const { id, description } = todo;
    dispatch({
      type: "todo done",
      payload: id,
    });
  };

  const todosCount = () => {
    return todos.length
  };

  const pendingCount = () => {
    return todos.filter(todos => todos.done).length;
  };

  return {
    todos,
    onNewTodo,
    removeTodo,
    onToggleTodo,
    todosCount,
    pendingCount,
  };
};

export default useTodo;
