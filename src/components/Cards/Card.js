import React from "react";
import "./Card.scss"


const Card = (props) => {
    return (
        <div className="card">
            <b>{props.year}</b>
            <h4>{props.description}</h4>
        </div>
    )
}
export default Card;