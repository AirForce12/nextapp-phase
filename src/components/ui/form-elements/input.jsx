import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import cn from "clsx";

const Input = forwardRef(
    ({ type, id, name, className, size, ...rest }, ref) => {
        return (
            <input
                className={cn(
                    "form-control",
                    `form-control-${size}`,
                    className
                )}
                name={id}
                id={name}
                type={type}
                ref={ref}
                {...rest}
            />
        );
    }
);

Input.displayName = "Input";

Input.propTypes = {
    type: PropTypes.string,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    size: PropTypes.oneOf(["sm", "md", "lg"]),
};

Input.defaultProps = {
    type: "text",
    size: "lg",
};

export default Input;
