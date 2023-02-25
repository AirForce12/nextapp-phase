import React, { memo } from "react";
import cn from "clsx";
import PropTypes from "prop-types";

const Offcanvas = memo(({ children, className, isOpen, onClick }) => {
    return (
        <div
            className={cn(
                "popup-mobile-menu",
                isOpen ? "menu-open" : "",
                className
            )}
            onClick={onClick}
            onKeyPress={onClick}
            role="button"
            tabIndex={0}
        >
            <div
                className="inner"
                onClick={(e) => e.stopPropagation()}
                onKeyPress={onClick}
                role="button"
                tabIndex={0}
            >
                {children}
            </div>
        </div>
    );
});

Offcanvas.displayName = "Offcanvas";

Offcanvas.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.node,
    isOpen: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Offcanvas;
