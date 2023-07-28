export const todoReducer = (initialState, action) => {
  switch (action.type) {
    case "todo App":
      return [...initialState, action.payload];
      throw new Error("Action.type = ABC no esta impl");
    case "todo Remove":
        return initialState.filter( todos => todos.id !== action.payload);
    case "todo done":
        return initialState.map(todo => {
          if(todo.id === action.payload){
            return {
              ...todo,
              done: !todo.done
            }
          }
          return todo
        })
    default:
      return initialState;
  }
};

export default todoReducer