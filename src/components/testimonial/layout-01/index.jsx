import React from "react";
import PropTypes from "prop-types";
import Image from "@ui/image";
import { ImageType } from "@utils/types";
import RatingImg from "@assets/images/icons/rating.png";
import { StaticImage } from "gatsby-plugin-image";

const Testimonial = ({
    title,
    designation,
    subtitle,
    desc,
    image,
    rating,
    projectTitle,
    projectMeta,
}) => {
    const rat = Number(rating);

    return (
        <div className="testimonial">
            <div className="inner">
                <div className="card-info">
                    {image?.src && (
                        <div className="card-thumbnail">
                            <Image src={image.src} alt={image?.alt || title} />
                        </div>
                    )}

                    <div className="card-content">
                        {subtitle && (
                            <span className="subtitle mt--10">{subtitle}</span>
                        )}
                        <h3 className="title">{title}</h3>
                        {designation && (
                            <span className="designation">{designation}</span>
                        )}
                    </div>
                </div>
                <div className="card-description">
                    <StaticImage
                        src="../../../assets/images/icons/quote.png"
                        alt="quote"
                        className="quote-img"
                    />
                    <div className="title-area">
                        <div className="title-info">
                            {projectTitle && (
                                <h3 className="title">{projectTitle}</h3>
                            )}
                            {projectMeta && (
                                <span className="date">{projectMeta}</span>
                            )}
                        </div>
                        {rating && (
                            <div className="rating">
                                {Array.from(
                                    { length: Number(rating) },
                                    (_, i) => (
                                        <img
                                            key={i}
                                            src={RatingImg}
                                            alt="rating"
                                        />
                                    )
                                )}
                            </div>
                        )}
                    </div>
                    {/*<div className="seperator"></div>*/}
                    <p className="discription">{desc}</p>
                </div>
            </div>
        </div>
    );
};

Testimonial.propTypes = {
    title: PropTypes.string.isRequired,
    designation: PropTypes.string,
    subtitle: PropTypes.string,
    desc: PropTypes.string.isRequired,
    image: PropTypes.shape(ImageType),
    rating: PropTypes.string,
    projectTitle: PropTypes.string,
    projectMeta: PropTypes.string,
};

export default Testimonial;
