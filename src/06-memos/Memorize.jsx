import { useState } from "react";
import { useCounter } from "../hooks"
import Small from "./Small";

export const Memorize = () => {

    const { counter, handleSum } = useCounter();
    const [show, setShow] = useState();
    return (
        <>
            <h1>Counter: <Small value={counter} /> </h1>
            <hr />
            <button onClick={() => handleSum(1)} className="btn btn-primary mx-2"> +1 </button>
            <button className="btn btn-outline-primary" onClick={() => setShow(!show)}>Show/Hide {JSON.stringify(show)}</button>
        </>
    )
}

export default Memorize
