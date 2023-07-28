export const TodoItem = ({todos, removeTodo, onToggleTodo}) => {

    const deleteTodo = (id) => {
       removeTodo(id);
    }

    return (
        <>
            <li className="list-group-item d-flex justify-content-between">
                <span className={`align-self-center ${(todos.done) ? 'text-decoration-line-through' : ''}`} onClick={() => onToggleTodo(todos)}>{todos.id}{todos.description}</span>
                <button className="btn btn-danger mx-3" onClick={() => deleteTodo(todos.id)}>Borrar</button>
            </li>
        </>
    )
}

export default TodoItem
