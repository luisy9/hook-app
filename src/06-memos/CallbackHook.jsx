import { useCallback, useState } from "react"
import ShowIncrement from "./showIncrement";

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const increment = useCallback(
        (c) => {
            setCounter((value) => value + c)
        },
        [],
    )

    return (
        <>
            <h1>useCallback Hook: {counter}</h1>
            <hr />

            <ShowIncrement increment={increment} />
        </>
    )
}

export default CallbackHook
