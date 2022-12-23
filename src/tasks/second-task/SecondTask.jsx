import React, {useEffect, useRef, useState} from "react";
import {Button} from 'antd';
import Element from "./Element";

export default function SecondTask() {
    const [elem, setElem] = useState([])
    const ref = useRef(0);

    function setTimer() {
        let max = 5;
        let min = 1;
        let random = Math.floor(Math.random() * (max - min) + min);

        setInterval(() => {
            if (random > 0) {
                random.toString();
                return random--;
            } else {
                clearInterval()
                return null;
            }
        }, 1000)
    }

    useEffect(() => {
        for (let i = 0; i < elem.length; i++) {
            setTimeout(function () {
                if(ref.current >= 0) {
                    setElem(elem.slice(elem[i], 1))
                }
            }, elem[i].time * 1000)
        }
    }, [elem])

    return (
        <div className="container">
            <Button type="primary" onClick={() => {
                setElem([...elem, {time: setTimer()}])
                console.log(elem)
            }}>
                Add element
            </Button>
            {elem.map((el, index) => {
                if(ref.current > 0) {
                    return (
                        <Element  elemId={index} timer={elem.time}/>
                    )
                } else return null;
            })}
        </div>
    );
}