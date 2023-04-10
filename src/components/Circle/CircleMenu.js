import React from "react";
import "./CircleMenu.scss";
import MenuItem from "./MenuItem";

const CircleMenu = ({activeButton, setActiveButton}) => {
    const handleButtonClick = (buttonId) => {
        setActiveButton(buttonId);
    };
    const years = [
        {id: 1, leftYear: 1900, rightYear: 1925},
        {id: 2, leftYear: 1925, rightYear: 1950},
        {id: 3, leftYear: 1950, rightYear: 1975},
        {id: 4, leftYear: 1975, rightYear: 2000},
        {id: 5, leftYear: 2000, rightYear: 2025},
        {id: 6, leftYear: 2025, rightYear: 2050},
    ]
    const filteredArr = years.filter((obj) => obj.id === activeButton);

    const menuItems = [
        {buttonText: "Наука", buttonId: 1},
        {buttonText: "Игры", buttonId: 2},
        {buttonText: "История", buttonId: 3},
        {buttonText: "Кино", buttonId: 4},
        {buttonText: "Театры", buttonId: 5},
        {buttonText: "Медицина", buttonId: 6},
    ];

    return (
        <div className="circle">
            <div className="centerHeight"/>
            <div className="centerWidth"/>
            <div className="circular-menu">
                {filteredArr.map((obj) => (
                    <div className="years">
                        <b style={{color: "#5D5FEF"}}>{obj.leftYear}</b>
                        <b style={{color: "#EF5DA8"}}>{obj.rightYear}</b>
                    </div>
                ))}
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
        </div>
    );
};

export default CircleMenu;
