import React, { useRef } from "react";
import PropTypes from "prop-types";


export default function Element(props) {
    const ref = useRef(props.timer);

    Element.propTypes = {
        timer: PropTypes.number.isRequired,
        elemId: PropTypes.number.isRequired
    };

    return (
        <div className="square" key={props.elemId}>
            <p className="elem-id">{props.elemId}</p>
            <p className="elem-time">{ref.current}</p>
        </div>
    )
}