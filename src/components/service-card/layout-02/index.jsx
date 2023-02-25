import React from "react";
import PropTypes from "prop-types";
import Icon from "@ui/icon";

const ServiceCard = ({ title, desc, icon }) => {
    return (
        <div className="service-card-one border-style">
            <div className="inner">
                <Icon name={icon} />
                <h6 className="title color-lightn">{title}</h6>
                <p className="describe">{desc}</p>
            </div>
        </div>
    );
};

ServiceCard.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
};

ServiceCard.defaultProps = {
    path: "#!",
};

export default ServiceCard;
