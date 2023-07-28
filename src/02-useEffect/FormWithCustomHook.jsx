import { useEffect } from "react"
import Message from "./Message";
import { useForm } from "../hooks/useForm";

const FormWithCustomHook = () => {

    const { onChange, formState, username, email, password, onResetForm } = useForm({
        username: "",
        email: "",
        password: "",
    });

    // useEffect(() => {
    //     // console.log('useEffect called!');
    // }, []);

    // useEffect(() => {
    //     // console.log('useEffect Form called!');
    // }, [formState]);

    // useEffect(() => {
    //     // console.log('useEffect email called!');
    // }, [email]);

    return (
        <>
            <h1>Form with custom Hook</h1>
            <hr />
            <input type="text" className="form-control" placeholder="Username" name="username" value={username} onChange={onChange} />
            <input type="email" className="form-control mt-3" placeholder="luisdeharo@gmail.com" name="email" value={email} onChange={onChange} />
            <input type="password" className="form-control mt-3" placeholder="password" name="password" value={password} onChange={onChange} />
            {/* {
                (username === 'luis') && <Message className="" />
            } */}
            <button className="btn btn-primary mt-2" onClick={onResetForm}>Borrar</button>
            
        </>
    )
}

export default FormWithCustomHook
