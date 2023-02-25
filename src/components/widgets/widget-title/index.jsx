import React from "react";
import PropTypes from "prop-types";
import cn from "clsx";

const WidgeTitle = ({ children, className }) => {
    return (
        <div className={cn("menu-title", className)}>
            <h6>{children}</h6>
        </div>
    );
};

WidgeTitle.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default WidgeTitle;
