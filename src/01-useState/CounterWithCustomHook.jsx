import useCounter from "../hooks/useCounter"

const CounterWithCustomHook = () => {

    const { counter, handleSum, handleDecrement, handleReset } = useCounter();


    return (
        <>
            <h1>Counter with Hook: {counter}</h1>
            <hr />
            <button className="btn btn-outline-primary mx-4" onClick={() => handleSum(10)}>+1</button>
            <button className="btn btn-outline-warning mx-4" onClick={handleReset}>Reset</button>
            <button className="btn btn-outline-info mx-4" onClick={handleDecrement}>-1</button>
        </>
    )
}

export default CounterWithCustomHook
