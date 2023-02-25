import React from "react";
import PropTypes from "prop-types";
import Image from "@ui/image";
import { HeadingType, TextType, ImageType } from "@utils/types";

const HeroArea = ({ data, id }) => {
    return (
        <div id={id} className="rn-slider-area">
            <div className="slide slider-style-4" data-black-overlay="2">
                {data?.images?.[0]?.src && (
                    <div className="hero-img">
                        <Image
                            src={data.images[0].src}
                            alt={data.images[0]?.alt || "Hero Bg"}
                        />
                    </div>
                )}
                <div className="container">
                    <div className="row text-start">
                        <div className="order-2 order-lg-1 col-lg-9 col-xl-7">
                            <div className="content">
                                <div className="inner fashion-designer-inner mb--60 text-start  mb_sm--80">
                                    {data?.headings?.[0] && (
                                        <h1 className="title">
                                            {data.headings[0]?.content}
                                        </h1>
                                    )}
                                    {data?.texts?.[0] && (
                                        <p className="disc fd-lorem">
                                            {data.texts[0]?.content}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

HeroArea.propTypes = {
    id: PropTypes.string,
    data: PropTypes.shape({
        headings: PropTypes.arrayOf(PropTypes.shape(HeadingType)),
        texts: PropTypes.arrayOf(PropTypes.shape(TextType)),
        images: PropTypes.arrayOf(PropTypes.shape(ImageType)),
    }),
};

HeroArea.defaultProps = {
    id: "home",
};

export default HeroArea;
