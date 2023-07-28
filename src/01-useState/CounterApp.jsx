import { useState } from 'react';

const CounterApp = () => {
  const [counter, setCounter] = useState({counter2: 20, counter3: 30});
  const { counter2, counter3 } = counter;

  return (
    <>
      <h1>Counter: {counter2}</h1>
      <h1>Counter: {counter3}</h1>

      <hr />
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setCounter({
          ...counter,
          counter2: counter2 + 1,
          counter3: counter3 + 1
        })}
      >
        +1
      </button>
    </>
  );
};

export default CounterApp;