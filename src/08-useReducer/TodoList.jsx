import TodoItem from "./TodoItem"
export const TodoList = ({todos, removeTodo, onToggleTodo}) => {
    return (
        <>
            <ul key={todos.id} className="list-group">
                <TodoItem todos={todos} removeTodo={removeTodo} onToggleTodo={onToggleTodo}/>
            </ul>
        </>
    )
}

export default TodoList
