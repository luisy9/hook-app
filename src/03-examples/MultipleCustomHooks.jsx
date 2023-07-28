import { useCounter, useFetch } from '../hooks'
import { LoadingQuote, BlockQuote } from './index'

const MultipleCustomHooks = () => {

    const { handleSum, counter, handleDecrement } = useCounter();
    const { data, isLoading, hasError } = useFetch(`https://rickandmortyapi.com/api/character/${counter}`);

    return (
        <>
            <h1>Rick&Morty Quotes</h1>
            <hr />
            {
                isLoading ? <LoadingQuote />
                    : <BlockQuote data={data} />
            }

            <button className="btn btn-primary" onClick={() => handleSum(1)}>
                Next Quote
            </button>
            <button className="mx-2 btn btn-primary" onClick={handleDecrement}>
                Before Quote
            </button>
        </>
    )
}

export default MultipleCustomHooks
