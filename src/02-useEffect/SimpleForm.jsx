import { useEffect, useState } from "react"
import Message from "./Message";
const SimpleForm = () => {

    const [formState, seFormState] = useState({
        username: 'Luis',
        email: 'dee',
    });

    const { username, email } = formState;

    const onChange = ({ target }) => {
        const { name, value } = target;
        seFormState({
            ...formState,
            [name]: value
        });
    }


    useEffect(() => {
        // console.log('useEffect called!');
    }, []);

    useEffect(() => {
        // console.log('useEffect Form called!');
    }, [formState]);

    useEffect(() => {
        // console.log('useEffect email called!');
    }, [email]);

    return (
        <>
            <h1>Form Simple</h1>
            <hr />
            <input type="text" className="form-control" placeholder="Username" name="username" value={username} onChange={onChange} />
            <input type="text" className="form-control mt-3" placeholder="luisdeharo@gmail.com" name="email" value={email} onChange={onChange} />
            {
                <Message className="" />
            }
        </>
    )
}

export default SimpleForm
