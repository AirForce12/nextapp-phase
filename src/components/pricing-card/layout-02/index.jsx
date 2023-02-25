import React from "react";
import PropTypes from "prop-types";
import cn from "clsx";
import { Check, X } from "react-feather";
import Button from "@ui/button";

const PricingCard = ({ title, subtitle, price, orderLink, features }) => {
    return (
        <div className="pricing-wrapper">
            <div className="ts-header">
                <h6>{title}</h6>
                <span>{subtitle}</span>
            </div>
            <h3 className="price">{price}</h3>
            <div className="pricing-body">
                {features?.map((feature) => (
                    <div className="feature" key={feature.title}>
                        {feature.available ? <Check /> : <X className="off" />}
                        <span
                            className={cn(
                                "name",
                                feature.available === false && "off"
                            )}
                        >
                            {feature.title}
                        </span>
                    </div>
                ))}
            </div>
            <div className="pricing-footer">
                <Button path={orderLink}>
                    <span>BUY NOW</span>
                </Button>
            </div>
        </div>
    );
};

PricingCard.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            available: PropTypes.bool.isRequired,
        })
    ).isRequired,
    orderLink: PropTypes.string.isRequired,
};

PricingCard.defaultProps = {
    features: [],
    orderLink: "#!",
};

export default PricingCard;
