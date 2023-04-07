import MenuItem from "./components/Circle/MenuItem";
import CircleMenu from "./components/Circle/CircleMenu";

function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <div className="mainName">
                    <h1>Исторические даты</h1>
                </div>
                <CircleMenu/>
                <div className="navigationArrows">
                    <div className="navNumbers">06/06</div>
                    <button className="btnLeft"><i className="arrowLeft"></i></button>
                    <button className="btnRight"><i className="arrowRight"></i></button>
                </div>
                <div className="cards">
                    <div className="card">
                        <b>2015</b>
                        <h4>13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды</h4>
                    </div>

                    <div className="card">
                        <b>2016</b>
                        <h4>Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую
                            обозначение GN-z11</h4>
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
