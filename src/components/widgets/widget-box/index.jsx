import React from "react";
import PropTypes from "prop-types";
import cn from "clsx";

const WidgetBox = ({ children, className }) => {
    return <div className={cn(className)}>{children}</div>;
};

WidgetBox.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default WidgetBox;
