import React from "react";
import PropTypes from "prop-types";
import cn from "clsx";

const Sticky = ({ children, className, top }) => {
    return (
        <div
            className={cn("position-sticky sticky-top", className)}
            style={{ top }}
        >
            {children}
        </div>
    );
};

Sticky.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    top: PropTypes.string,
};

Sticky.defaultProps = {
    top: "120px",
};

export default Sticky;
