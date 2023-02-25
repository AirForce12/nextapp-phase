import React from "react";
import PropTypes from "prop-types";
import Image from "@ui/image";
import { ImageType } from "@utils/types";

const Testimonial = ({ image, title, designation, desc }) => {
    return (
        <div className="testimonial-inner">
            <div className="testimonial-header">
                <div className="thumbnail">
                    {image?.src && (
                        <div className="card-thumbnail">
                            <Image src={image.src} alt={image?.alt || title} />
                        </div>
                    )}
                </div>
                <h5 className="ts-header">
                    <span className="text-color-primary">{title}</span>{" "}
                    {designation}
                </h5>
            </div>
            <div className="testimonial-body">
                <p
                    className="discription"
                    dangerouslySetInnerHTML={{ __html: desc }}
                />
            </div>
        </div>
    );
};

Testimonial.propTypes = {
    image: PropTypes.shape(ImageType),
    title: PropTypes.string,
    designation: PropTypes.string,
    desc: PropTypes.string.isRequired,
};

export default Testimonial;
