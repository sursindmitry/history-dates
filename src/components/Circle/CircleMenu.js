import React from "react";
import "./CircleMenu.scss";
import MenuItem from "./MenuItem";

const CircleMenu = ({ activeButton, setActiveButton }) => {
    const handleButtonClick = (buttonId) => {
        setActiveButton(buttonId);
    };

    const menuItems = [
        { buttonText: "Наука", buttonId: 1 },
        { buttonText: "Игры", buttonId: 2 },
        { buttonText: "История", buttonId: 3 },
        { buttonText: "Кино", buttonId: 4 },
        { buttonText: "Театры", buttonId: 5 },
        { buttonText: "Медицина", buttonId: 6 },
    ];

    return (
        <div className="circular-menu">
            <div className="years">
                <b style={{ color: "#5D5FEF" }}>1900</b>
                <b style={{ color: "#EF5DA8" }}>2022</b>
            </div>
            <div className="menu-content">

                {menuItems.map((item) => (
                    <MenuItem
                        key={item.buttonId}
                        buttonText={item.buttonText}
                        buttonId={item.buttonId}
                        isActive={activeButton === item.buttonId}
                        onClick={() => handleButtonClick(item.buttonId)}
                    />
                ))}
            </div>
        </div>
    );
};

export default CircleMenu;
