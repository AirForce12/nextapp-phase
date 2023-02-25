import React from "react";
import PropTypes from "prop-types";
import cn from "clsx";

const FormGroup = ({ className, children }) => {
    return <div className={cn("form-group", className)}>{children}</div>;
};

FormGroup.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default FormGroup;
