import React from "react";
import PropTypes from "prop-types";
import Button from "@ui/button";
import Image from "@ui/image";
import { ImageType, HeadingType } from "@utils/types";

const HeroArea = ({ data }) => {
    return (
        <div className="slider-perosonal-portfolio">
            {data?.images?.[0]?.src && (
                <div className="hero-img">
                    <Image
                        src={data.images[0].src}
                        alt={data.images[0]?.alt || "Hero"}
                    />
                </div>
            )}
            <div className="container">
                <div className="row row--30 align-items-center">
                    <div className="col-12">
                        <div className="inner text-center">
                            {data?.headings?.[0] && (
                                <h1
                                    className="title"
                                    dangerouslySetInnerHTML={{
                                        __html: data.headings[0].content,
                                    }}
                                />
                            )}
                            <div className="button-group mt--30">
                                <Button path="/" className="shadow-none">
                                    Contact Me
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

HeroArea.propTypes = {
    data: PropTypes.shape({
        headings: PropTypes.arrayOf(PropTypes.shape(HeadingType)),
        images: PropTypes.arrayOf(PropTypes.shape(ImageType)),
    }),
};

export default HeroArea;
