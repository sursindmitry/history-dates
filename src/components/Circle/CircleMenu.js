import React, {useState} from "react";
import "./CircleMenu.scss"
import MenuItem from "./MenuItem";


const CircleMenu = (props) => {

    const [active, setActive] = useState(null);

    const handleClick = (id) => {
        setActive(id);
    };

    return (
        <div>
            <div className="circular-menu">
                <div className="years">
                    <b style={{color: "#5D5FEF"}}>1900</b>
                    <b style={{color: "#EF5DA8"}}>2022</b>
                </div>
                    <MenuItem id={1} active={active === 1} onClick={handleClick} text={"Наука"}/>
                    <MenuItem id={2} active={active === 2} onClick={handleClick} text={"Игры"}/>
                    <MenuItem id={3} active={active === 3} onClick={handleClick} text={"История"}/>
                    <MenuItem id={4} active={active === 4} onClick={handleClick} text={"Кино"}/>
                    <MenuItem id={5} active={active === 5} onClick={handleClick} text={"Театры"}/>
                    <MenuItem id={6} active={active === 6} onClick={handleClick} text={"Медицина"}/>
            </div>
        </div>


    );
}

export default CircleMenu;