import React from "react";
import PropTypes from "prop-types";

const DemoButton = ({ onClick }) => {
    return (
        <div
            className="rn-right-demo"
            onClick={onClick}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.preventDefault()}
        >
            <button className="demo-button">
                <span className="text">Demos</span>
            </button>
        </div>
    );
};

DemoButton.propTypes = {
    onClick: PropTypes.func,
};

export default DemoButton;
