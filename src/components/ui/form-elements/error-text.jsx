import React from "react";
import PropTypes from "prop-types";
import cn from "clsx";

const ErrorText = ({ className, children }) => {
    return (
        <span className={cn("text-red mt-2 d-inline-block", className)}>
            {children}
        </span>
    );
};

ErrorText.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default ErrorText;
