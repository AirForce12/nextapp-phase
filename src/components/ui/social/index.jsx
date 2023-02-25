import React from "react";
import PropTypes from "prop-types";
import cn from "clsx";

const Social = ({ className, children }) => {
    return (
        <ul className={cn(className, "social-share d-flex liststyle")}>
            {children}
        </ul>
    );
};

Social.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export { default as SocialLink } from "./social-link";

export default Social;
