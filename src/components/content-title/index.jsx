import React from "react";
import PropTypes from "prop-types";

const ContentTitle = ({ title, subtitle }) => {
    return (
        <div className="content-title">
            <span className="subtitle">{subtitle}</span>
            <h4 className="maintitle">{title}</h4>
        </div>
    );
};

ContentTitle.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
};

export default ContentTitle;
