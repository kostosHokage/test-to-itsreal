import React, {useEffect, useRef, useState} from "react";
import {Button} from 'antd';
// import Element from "./Element";

export default function SecondTask() {
    const [elem, setElem] = useState([])
    const ref = useRef(0);

    function setTimer() {
        let max = 5;
        let min = 1;
        // ref.current = Math.floor(Math.random() * (max - min) + min);
        ref.current = 5
        setInterval(() => {
            if (ref.current > 0) {
                ref.current--;
            } else {
                clearInterval()
                return null;
            }
            console.log(ref.current)
        }, 1000)
        console.log(ref.current)
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
            }}>
                Add element
            </Button>
            {/* eslint-disable-next-line array-callback-return */}
            {elem.map((el, index) => {
                if(ref.current > 0) {
                    return (
                        <div className="square" key={index}>
                            <p className="elem-id">{index}</p>
                            <p className="elem-time">{ref.current}</p>
                        </div>
                    )
                }
            })}
        </div>
    );
}