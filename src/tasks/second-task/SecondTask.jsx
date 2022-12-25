import React, { useState } from "react";
import {Button} from 'antd';
import Element from "./Element";

export default function SecondTask() {
    const [elem, setElem] = useState([])

    return (
        <div className="container">
            <Button type="primary" onClick={() => {
                setElem([...elem, {id: crypto.randomUUID()}])
            }}>
                Add element
            </Button>
            {elem.map((el, index) => {
                return (
                    <Element key={el.id} index={index} id={el.id} elements={elem} handlerElem={setElem}/>
                )
            })}
        </div>
    );
}