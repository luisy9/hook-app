import { useEffect } from "react";

const Message = () => {

    useEffect(() => {
        const onMouseMove = ({ x, y }) => {
            const coords = { x, y };
            console.log(coords);
        }

        window.addEventListener('mousemove', onMouseMove);
        return () => {
            window.removeEventListener('mousemove', onMouseMove);
        }
    }, [])

    return (
        <>
            <h3 className="pt-3">Usuario ya existe!</h3>
        </>
    )
}

export default Message
