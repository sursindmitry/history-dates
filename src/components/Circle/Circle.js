import React, {useState} from "react";
import "./Circle.scss"

const setMenu = () => {
    let menus = [...document.querySelectorAll('.circular-menu')];
    menus.map((menu) => {
        let items = menu.querySelectorAll('.circular-menu__item')
        const length = items.length;
        const arc = 2 * Math.PI * (1 / length);
        const radius = 50;

        for (let i = 0; i < length; i++) {
            const angle = i * arc;
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);

            items[i].style.left = 50 + x + '%';
            items[i].style.top = 50 + y + '%';
        }
    })
}

class Circle extends React.Component {

    state = {
        numbers: [1, 2, 3, 4, 5, 6]
    }

    componentDidMount() {
        setMenu();
    }

    render() {
        return (
            <div className="circular-menu">
                <div className="years">
                    <b style={{color: "#5D5FEF"}}>2015</b>
                    <b style={{color: "#EF5DA8"}}>2022</b>
                </div>
                {this.state.numbers.map((num, index) => (
                    <a className="circular-menu__item" key={index}>{num}</a>
                ))}
            {/*    TODO: Ещё текст при наведении*/}
            </div>
        );
    }
}

export default Circle;