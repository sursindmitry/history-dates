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


const MenuItem = ({id, active, onClick, text}) => {
    useEffect(() => {
        setMenu();
    })
    return (
        <div className={`menu__item`}>
            <i
                className={`menu-item ${active ? 'active' : ''}`}
                onClick={() => onClick(id)}
            >
                {id}
            </i>
            <b className="menu-item-text">{text}</b>
        </div>
    );
};

export default MenuItem;