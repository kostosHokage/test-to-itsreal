import React, {useEffect, useRef, useState} from "react";
import PropTypes from "prop-types";

export default function Element(props) {
    const {handlerElem, elements, id, index} = props

    let max = 7;
    let min = 3;
    let random = Math.floor(Math.random() * (max - min) + min);

    const intervalRef = useRef();
    const [count, setCount] = useState(random)

    Element.propTypes = {
        handlerElem: PropTypes.func.isRequired,
        elements: PropTypes.array.isRequired,
        id: PropTypes.string.isRequired,
        index: PropTypes.number.isRequired
    };

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            console.log(elements)
            setCount(count => count - 1)
            if (count <= 1) {
                handlerElem(elements.filter(i => i.id !== id))
            }
        }, 1000)

        return () => {
            clearInterval(intervalRef.current)
        }
    }, [count])

    return (
        <div className="square" key={id}>
            <p className="elem-id">{index}</p>
            <p className="elem-time">{count}</p>
        </div>
    )
}