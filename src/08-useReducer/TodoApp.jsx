import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";
import { useTodo } from '../hooks'

const TodoApp = () => {
    const { todos, todosCount, pendingCount ,removeTodo, onToggleTodo, onNewTodo } = useTodo();
    return (
        <>
            <h1>Todo App: {todosCount()}, <small>pendientes: {pendingCount()}</small> </h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    {
                        todos.map(todos => (
                            <TodoList key={todos.id} todos={todos} removeTodo={removeTodo} onToggleTodo={onToggleTodo} />
                        ))
                    }

                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd onNewTodo={onNewTodo} />
                </div>
            </div>

        </>
    )
}

export default TodoApp
