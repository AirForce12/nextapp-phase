import React from "react";
import PropTypes from "prop-types";
import Image from "@ui/image";
import { ImageType } from "@utils/types";

const Testimonial = ({ title, designation, desc, image }) => {
    return (
        <div className="rn-testimonial">
            <div className="testimonial-inner">
                <div className="testimonial-header">
                    {image?.src && (
                        <div className="thumbnail">
                            <Image
                                src={image.src}
                                alt={image?.alt || "client"}
                            />
                        </div>
                    )}
                    <h5 className="ts-header">
                        <span className="text-color-primary">{title}</span>{" "}
                        {designation && <>{designation}</>}
                    </h5>
                </div>
                <div className="testimonial-body">
                    <p
                        className="discription"
                        dangerouslySetInnerHTML={{ __html: desc }}
                    />
                </div>
            </div>
        </div>
    );
};

Testimonial.propTypes = {
    title: PropTypes.string.isRequired,
    designation: PropTypes.string,
    desc: PropTypes.string.isRequired,
    image: PropTypes.shape(ImageType),
};

export default Testimonial;
