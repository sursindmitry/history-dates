import React, { useState } from "react";
import CircleMenu from "./components/Circle/CircleMenu";
import Navigation from "./components/Navigation/Navigation";

function App() {
    const [activeButton, setActiveButton] = useState(1);

    const handleCountData = (count) => {
        setActiveButton(count);
    };

    return (
        <div className="App">
            <div className="wrapper">
                <div className="mainName">
                    <h1>Исторические даты</h1>
                </div>
                <CircleMenu activeButton={activeButton} setActiveButton={setActiveButton} />
                <Navigation onCountData={handleCountData} />
                <div className="cards">
                    <div className="card">
                        <b>2015</b>
                        <h4>13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды</h4>
                    </div>

                    <div className="card">
                        <b>2016</b>
                        <h4>Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11</h4>
                    </div>

                    <div className="card">
                        <b>2017</b>
                        <h4>Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi</h4>
                    </div>

                    <div className="btnList">
                        <button><i className="arrowRight"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
