import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const Anchor = React.forwardRef(
    ({ path, children, className, rel, label, target, onClick }, ref) => {
        const internal = /^\/(?!\/)/.test(path);
        if (!internal) {
            const isHash = path.startsWith("#");
            if (isHash) {
                return (
                    <a
                        aria-label={label}
                        className={className}
                        href={path}
                        onClick={onClick}
                        ref={ref}
                    >
                        {children}
                    </a>
                );
            }
            return (
                <a
                    aria-label={label}
                    rel={rel}
                    className={className}
                    href={path}
                    target={target}
                    onClick={onClick}
                    ref={ref}
                >
                    {children}
                </a>
            );
        }

        return (
            <Link
                aria-label={label}
                rel="preload"
                className={className}
                ref={ref}
                to={path}
            >
                {children}
            </Link>
        );
    }
);

Anchor.defaultProps = {
    target: "_blank",
    rel: "noopener noreferrer",
};

Anchor.propTypes = {
    children: PropTypes.node.isRequired,
    path: PropTypes.string.isRequired,
    className: PropTypes.string,
    rel: PropTypes.string,
    label: PropTypes.string,
    target: PropTypes.oneOf(["_blank", "_self", "_parent", "_top"]),
    onClick: PropTypes.func,
};

Anchor.displayName = "Anchor";

export default Anchor;
