import React, {useState} from "react";
import CircleMenu from "./components/Circle/CircleMenu";
import Navigation from "./components/Navigation/Navigation";
import Cards from "./components/Cards/Cards";


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
                <CircleMenu activeButton={activeButton} setActiveButton={setActiveButton}/>
                <Navigation activeButton={activeButton} onCountData={handleCountData}/>
                <Cards currentId={activeButton}/>
            </div>
        </div>
    );
}

export default App;
