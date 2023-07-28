import { useState } from "react";
import { useForm } from '../hooks'

const TodoAdd = ({ onNewTodo }) => {

    const {description, onChange, onResetForm } = useForm({
        description: ''
    })

    const handleForm = () => {
        event.preventDefault();
        if(description.length <= 1) return;
        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description: description
        }

        onNewTodo(newTodo);
        onResetForm();
    }

    return (
        <>
            <form action="">
                <input onChange={onChange} type="text" name="description" value={description} placeholder="Que hay que hacer?" className="form-control" />
                <button onClick={handleForm} type="submit" className="btn btn-outline-primary mt-3">Agregar</button>
            </form>
        </>
    )
}

export default TodoAdd
