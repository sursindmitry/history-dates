function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <div className="mainName">
                    <h1>Исторические даты</h1>
                </div>

                <div className="circularMenu">
                    <span className="game"><i className="circularMenu__item"></i></span>
                    <span className="theater"><i className="circularMenu__item"></i></span>
                    <span className="science"><i className="circularMenu__item"></i></span>
                    <span className="literature"><i className="circularMenu__item"></i></span>
                    <span className="movies"><i className="circularMenu__item"></i></span>
                    <span className="history"><i className="circularMenu__item"></i></span>
                </div>

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
