import { useState } from "react";

export const useCounter = (value = 1) => {
 
    const [counter, setCounter] = useState(value);

    const handleSum = (value = 1) => {
        setCounter(counter + value);
    }

    const handleDecrement = () => {
        if(counter === 1) return;
        setCounter(counter - 1);
    }

    const handleReset = () => {
        setCounter(value);
    }

    return {
        counter,
        handleSum,
        handleDecrement,
        handleReset
    }
}

export default useCounter;