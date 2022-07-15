import React from "react";

export default (props) => {
    const {min, max } = props
    const res = parseInt(Math.random() * (max - min)) + min
    return(
        <div>
            <h2>Número Aleatório Entre:</h2>
            <p>
                <strong>{props.min} </strong>
                e
                <strong> {props.max} </strong>
                é
                <strong> {res}</strong>
            </p>
        </div>
    )
}