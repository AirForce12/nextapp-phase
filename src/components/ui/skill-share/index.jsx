import React from "react";
import PropTypes from "prop-types";

const SkillShare = ({ children }) => {
    return <ul className="skill-share d-flex liststyle">{children}</ul>;
};

SkillShare.propTypes = {
    children: PropTypes.node.isRequired,
};

export { default as SkillItem } from "./skill-item";

export default SkillShare;
