import React, {useState} from "react";
import PropTypes from "prop-types";
import "./Navigation.scss";

const Navigation = ({onCountData}) => {
    const [count, setCount] = useState(1);

    const handleDec = () => {
        const updatedCount = count === 1 ? 6 : count - 1;
        setCount(updatedCount);
        onCountData(updatedCount);
    };

    const handleInc = () => {
        const updatedCount = count === 6 ? 1 : count + 1;
        setCount(updatedCount);
        onCountData(updatedCount);
    };
    return (
        <div className="navigationArrows">
            <div className="navNumbers">0{count}/06</div>
            <button className="btnLeft" onClick={handleDec}>
                <i className="arrowLeft"></i>
            </button>
            <button className="btnRight" onClick={handleInc}>
                <i className="arrowRight"></i>
            </button>
        </div>
    );
};

Navigation.propTypes = {
    onCountData: PropTypes.func.isRequired,
};

export default Navigation;
