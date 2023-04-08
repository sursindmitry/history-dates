import "./MenuItem.scss"
import {useEffect} from "react";

const setMenu = () => {
    let menus = [...document.querySelectorAll('.circular-menu')];
    menus.map((menu) => {
        let items = menu.querySelectorAll('.menu__item')
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


const MenuItem = ({buttonText, buttonId, isActive, onClick}) => {

    useEffect(() => {
        setMenu();
    })
    console.log(onClick)
    return (
        <div className={`menu__item`}>
            <i

                onClick={() => onClick(buttonId)}
                className={`menu-item ${isActive ? 'active' : ''}`}
            >
                {buttonId}
            </i>
            <b className="menu-item-text">{buttonText}</b>
        </div>
    );
};

export default MenuItem;