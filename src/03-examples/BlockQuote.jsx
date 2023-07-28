import { useLayoutEffect, useRef, useState } from "react"

export const BlockQuote = ({ data }) => {

    const pRef = useRef();
    const [boxSize, setBoxSize] = useState({width: 0, heigth: 0});

    useLayoutEffect(() => {
       const { width, height } = pRef.current.getBoundingClientRect();
       console.log(width, height)
        setBoxSize({width, height})

    }, [data])

    return (
        <>
            <blockquote className="blockquote text-end" style={{ display: 'flex' }}>
                <div className="">
                    <img src={data.image} alt={data.name} />
                    <p ref={pRef}>{data.name}</p></div>
                <footer className="blockquote-footer">
                    Luis de Haro
                </footer>
            </blockquote>

            <code>{JSON.stringify(boxSize)}</code>
        </>
    )
}

export default BlockQuote
