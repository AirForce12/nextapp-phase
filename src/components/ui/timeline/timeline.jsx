import React from "react";
import PropTypes from "prop-types";
import cn from "clsx";

const Timeline = ({ children, className }) => {
    return <div className={cn("experience-list", className)}>{children}</div>;
};

Timeline.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default Timeline;
