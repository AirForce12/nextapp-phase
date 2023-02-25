import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import cn from "clsx";

const Textarea = forwardRef(({ id, name, className, ...rest }, ref) => {
    return (
        <textarea
            className={cn("form-control", className)}
            name={name}
            id={id}
            ref={ref}
            cols="30"
            rows="10"
            {...rest}
        ></textarea>
    );
});

Textarea.displayName = "Textarea";

Textarea.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default Textarea;
