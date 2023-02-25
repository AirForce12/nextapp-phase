import React from "react";
import PropTypes from "prop-types";
import Anchor from "@ui/anchor";
import Icon from "@ui/icon";

const ServiceCard = ({ title, description, path, icon }) => {
    return (
        <div className="rn-service">
            <div className="inner">
                {icon && (
                    <div className="icon">
                        <Icon name={icon} />
                    </div>
                )}
                <div className="content">
                    <h4 className="title">
                        <Anchor path={path}>{title}</Anchor>
                    </h4>
                    <p className="description">{description}</p>
                    <Anchor className="read-more-button" path={path}>
                        <Icon name="ArrowRight" />
                    </Anchor>
                </div>
            </div>
            <Anchor className="over-link" path={path}>
                <span className="visually-hidden">overlay link</span>
            </Anchor>
        </div>
    );
};

ServiceCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
};

ServiceCard.defaultProps = {
    path: "#!",
};

export default ServiceCard;
