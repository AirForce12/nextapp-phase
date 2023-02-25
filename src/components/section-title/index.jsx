import React from "react";
import PropTypes from "prop-types";
import cn from "clsx";

const SectionTitle = ({
    title,
    subtitle,
    align,
    className,
    titleClass,
    ...rest
}) => {
    return (
        <div className={cn(`section-title text-${align}`, className)} {...rest}>
            {subtitle && <span className="subtitle">{subtitle}</span>}
            {title && <h2 className={cn("title", titleClass)}>{title}</h2>}
        </div>
    );
};

SectionTitle.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    align: PropTypes.oneOf(["left", "right", "center"]),
    className: PropTypes.string,
    titleClass: PropTypes.string,
};

SectionTitle.defaultProps = {
    align: "left",
};

export default SectionTitle;
