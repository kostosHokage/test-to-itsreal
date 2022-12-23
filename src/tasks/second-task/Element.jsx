import React, {useState} from "react";
import {Button} from "antd";
import {useEffect} from "react";

export default function Element() {
    const [arr, setArr] = useState(['one', 'two', 'three', 'four']);
    const [timerId, setTimerId] = useState(null);

    useEffect(() => {
        clearTimeout(timerId)
        let max = 4000
        let min = 1000
        let random = Math.floor(Math.random() * (max - min) + min)
        setTimerId(setTimeout(() => deleteElementFromArr(arr), random))
    },[arr]);

    const addNewElementToArr = () => {
        setArr([...arr, 'newElement']);
    };

    const deleteElementFromArr = (arr) => {
        if (arr.length) {
            setArr(arr.slice(0, arr.length - 1))
        }
    };

    return (
        <div>
            <div>
                <Button onClick={addNewElementToArr}>add</Button>
            </div>
            <div style={{marginTop: '10px'}}>
                {arr.map((a, index) => (
                    <div key={index}>{a}</div>
                ))}
            </div>
        </div>
    )
}