import React, {useEffect, useRef, useState} from "react";
import {Button} from 'antd';
// import Element from "./Element";

export default function SecondTask() {
    const [elem, setElem] = useState([])
    const ref = useRef(0);

    useEffect(() => {
        ref.current = 0;
    }, [])

    function setTimer() {
        let max = 5;
        let min = 1;
        ref.current = Math.floor(Math.random() * (max - min) + min);
        setInterval(() => {
            if (ref.current > 0) {
                ref.current--;
            } else {
                return null;
            }
            console.log(ref.current)
        }, 1000)
        console.log(ref.current)
    }

    useEffect(() => {
        for (let i = 0; i < elem.length; i++) {
            setTimeout(function () {
                if(elem.length) {
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
            {elem.map((el, index) => {
                return (
                    <div className="square" key={index}>
                        <p className="elem-id">{index}</p>
                        <p className="elem-time">{ref.current}</p>
                    </div>
                )
            })}
        </div>
    );
}