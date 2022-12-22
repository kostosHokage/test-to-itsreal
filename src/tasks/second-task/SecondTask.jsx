import React, {useEffect, useState} from "react";
import { Button } from 'antd';
// import Element from "./Element";

export default function SecondTask() {
    const [elem, setElem] = useState([])

    function setTimer() {
        let max = 5000;
        let min = 1000;
        let random = Math.floor(Math.random() * (max - min) + min);

        return +random;
    }
    useEffect(() => {
        for (let i = 0; i < elem.length; i++) {
            setTimeout(function () {
                if(elem.length) {
                    setElem(elem.slice(elem[i], 1))
                    console.log(elem);
                }
            }, elem[i].time)
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
                        <p className="elem-time">{el.time}</p>
                    </div>
                )
            })}
        </div>
    );
}