import React from "react";
import PropTypes from "prop-types";
import cn from "clsx";
import { Link } from "gatsby";
import Icon from "@ui/icon";

const Button = ({
    children,
    type,
    label,
    onClick,
    className,
    path,
    icon,
    iconPosition,
    styles,
}) => {
    if (path) {
        const internal = /^\/(?!\/)/.test(path);
        const isHash = path?.startsWith("#");

        if (internal) {
            return (
                <Link
                    aria-label={label}
                    className={cn(className, "rn-btn")}
                    to={path}
                    style={styles}
                >
                    {icon && iconPosition === "left" && (
                        <Icon
                            name={icon}
                            size={14}
                            className={`icon-${iconPosition}`}
                        />
                    )}
                    <span>{children}</span>
                    {icon && iconPosition === "right" && (
                        <Icon
                            name={icon}
                            size={14}
                            className={`icon-${iconPosition}`}
                        />
                    )}
                </Link>
            );
        }
        if (isHash) {
            return (
                <a
                    aria-label={label}
                    onClick={onClick}
                    className={cn(className, "rn-btn")}
                    // href={"/"}
                    style={styles}
                >
                    {icon && iconPosition === "left" && (
                        <Icon
                            name={icon}
                            size={14}
                            className={`icon-${iconPosition}`}
                        />
                    )}
                    <span>{children}</span>
                    {icon && iconPosition === "right" && (
                        <Icon
                            name={icon}
                            size={14}
                            className={`icon-${iconPosition}`}
                        />
                    )}
                </a>
            );
        }
        return (
            <a
                aria-label={label}
                className={cn(className, "rn-btn")}
                href={path}
                target="_blank"
                rel="noreferrer noopener"
            >
                {icon && iconPosition === "left" && (
                    <Icon
                        name={icon}
                        size={14}
                        className={`icon-${iconPosition}`}
                    />
                )}
                <span>{children}</span>
                {icon && iconPosition === "right" && (
                    <Icon
                        name={icon}
                        size={14}
                        className={`icon-${iconPosition}`}
                    />
                )}
            </a>
        );
    }

    return (
        <button
            aria-label={label}
            onClick={onClick}
            className={cn(className, "rn-btn")}
            type={type}
        >
            {icon && iconPosition === "left" && (
                <Icon
                    name={icon}
                    size={14}
                    className={`icon-${iconPosition}`}
                />
            )}
            <span>{children}</span>
            {icon && iconPosition === "right" && (
                <Icon
                    name={icon}
                    size={14}
                    className={`icon-${iconPosition}`}
                />
            )}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    label: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string,
    path: PropTypes.string,
    variant: PropTypes.oneOf(["contained", "outlined", "texted"]),
    color: PropTypes.oneOf([
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "light",
        "dark",
        "white",
    ]),
    size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
    shape: PropTypes.oneOf(["rounded", "square", "ellipse"]),
    fullwidth: PropTypes.bool,
    icon: PropTypes.string,
    iconPosition: PropTypes.oneOf(["left", "right"]),
};

Button.defaultProps = {
    type: "button",
    variant: "contained",
    color: "primary",
    size: "md",
    shape: "rounded",
    fullwidth: false,
    iconPosition: "right",
    // active: false,
    // disabled: false,
};

export default Button;
