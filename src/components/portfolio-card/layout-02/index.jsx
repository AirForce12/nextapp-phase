import React from "react";
import { Check } from "react-feather";
import PropTypes from "prop-types";
import Image from "@ui/image";
import { ImageType } from "@utils/types";

const PortfolioCard = ({ title, description, feature_list, image }) => {
    return (
        <div className="portfolio-single">
            <div className="row direction">
                <div className="col-lg-5">
                    <div className="inner">
                        {title && <h5 className="title">{title}</h5>}
                        {description && (
                            <p className="discription">{description}</p>
                        )}

                        <div className="ft-area">
                            <div className="feature-wrapper">
                                {feature_list?.map((feature) => (
                                    <div
                                        className="single-feature"
                                        key={feature}
                                    >
                                        <Check />
                                        <p>{feature}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7 col-xl-7">
                    {image?.src && (
                        <div className="thumbnail">
                            <Image
                                src={image.src}
                                alt={image?.alt || "Personal Portfolio"}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

PortfolioCard.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.shape(ImageType),
    feature_list: PropTypes.arrayOf(PropTypes.string),
};

export default PortfolioCard;
