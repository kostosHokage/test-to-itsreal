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


    function setId() {
        let id = 0;
        id = elem.length + 1;
        return id.toString();
    }

    useEffect(() => {
        if (elem.length > 0) {
            for (let i = 0; i < elem.length; i++) {
                setTimeout(function () {
                    elem.splice(elem[i], 1);
                    console.log(elem);
                }, elem[i].time)
            }
        }
    }, [elem])

    return (
        <div className="container">
            <Button type="primary" onClick={() => {
                setElem([...elem, {id : setId(), time: setTimer()}])
            }}>
                Add element
            </Button>
            {elem.map((el) => {
                return (
                    <div className="square" key={el.id}>
                        <p className="elem-id">{el.id}</p>
                        <p className="elem-time">{el.time}</p>
                    </div>
                )
            })}
        </div>
    );
}