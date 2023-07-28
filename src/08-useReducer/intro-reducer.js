const initialState = [
  {
    id: 1,
    todo: "Recolectar la piedra de el alma",
    donde: false,
  },
];

const todoReducer = (state = initialState, action = {}) => {
  if (action.type === "[TODO] add todo") {
    return [...state, action.payload];
  }
  return state;
};

let todo = todoReducer();

const newTodo = {
  id: 2,
  todo: "Recolectar la piedra de poder",
  donde: false,
};

const addTodoAction = {
  type: "[TODO] add todo",
  payload: newTodo,
};

todo = todoReducer(todo, addTodoAction);
