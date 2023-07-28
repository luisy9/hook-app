import { useMemo, useState } from "react";
import { useCounter } from "../hooks"
import Small from "./Small";

const hevyStuff = (iterationNumber = 100) => {
    for (let i = 0; i < iterationNumber; i++) {
        console.log('Ahí vamos...');
    }

    return `${iterationNumber} iteraciones realizadas`;
}

export const MemoHook = () => {

    const { counter, handleSum } = useCounter(300);
    const [show, setShow] = useState();

    const memorizedValue = useMemo(() => hevyStuff(counter), [counter])
    return (
        <>
            <h1>Counter: <small>{counter}</small></h1>
            <hr />
            <h4>{memorizedValue}</h4>
            <button onClick={() => handleSum(1)} className="btn btn-primary mx-2"> +1 </button>
            <button className="btn btn-outline-primary" onClick={() => setShow(!show)}>Show/Hide {JSON.stringify(show)}</button>
        </>
    )
}

export default MemoHook
