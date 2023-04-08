import React from "react";
import "./Cards.scss"
import Card from "../Card/Card";

const arr = [
    {
        year: 2015,
        description: "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды"
    },
    {
        year: 2016,
        description: "Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11"
    },
    {
        year: 2017,
        description: "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi"
    },
]
const Cards = (props)=>{
    return(
        <div className="cards">
            {arr.map((obj)=>(
                <Card year={obj.year} description={obj.description}/>
            ))}
            <div className="btnList">
                <button><i className="arrowRight"></i></button>
            </div>
        </div>
    )
}

export default Cards;