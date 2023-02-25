import React, { useContext } from "react";
import cn from "clsx";
import PropTypes from "prop-types";
import { StateContext } from "../../../context-api/toggle-switch-context/theme-mode-state";

const OffcanvasBody = ({ children, className }) => {
    const { theme } = useContext(StateContext);

    return (
        <div
            className={cn(
                className,
                `content ${theme == "light" ? " white-version" : ""}`
            )}
        >
            {children}
        </div>
    );
};

OffcanvasBody.propTypes = {
    className: PropTypes.node,
    children: PropTypes.node.isRequired,
};

export default OffcanvasBody;
