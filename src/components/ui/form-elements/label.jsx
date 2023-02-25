import React from "react";
import PropTypes from "prop-types";

const Label = ({ htmlFor, className, children }) => {
    return (
        <label htmlFor={htmlFor} className={className}>
            {children}
        </label>
    );
};

Label.propTypes = {
    htmlFor: PropTypes.string.isRequired,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default Label;
