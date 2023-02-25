import React from "react";
import PropTypes from "prop-types";
import cn from "clsx";

const SocialLink = ({ path, children, className }) => {
    return (
        <li className={cn(className)}>
            <a href={path} target="_blank" rel="noopener noreferrer">
                {children}
            </a>
        </li>
    );
};

SocialLink.propTypes = {
    path: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default SocialLink;
