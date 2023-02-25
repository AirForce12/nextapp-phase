import React from "react";
import PropTypes from "prop-types";
import cn from "clsx";
import SectionTitle from "@components/section-title";
import Image from "@ui/image";
import Button from "@ui/button";
import {
    SectionTitleType,
    TextType,
    ImageType,
    ButtonType,
} from "@utils/types";

const AboutArea = ({ hasSeparator, data, id, classname = "" }) => {
    return (
        <div
            id={id}
            className={cn(
                "rn-about-area rn-section-gap",
                hasSeparator && "section-separator", classname
            )}
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="100"
                            data-aos-once="true"
                            className="image-area"
                        >
                            {data?.images?.[0]?.src && (
                                <div className="thumbnail">
                                    <Image
                                        src={data.images[0].src}
                                        alt={data.images[0]?.alt || "About"}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                    <div
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="100"
                        data-aos-once="true"
                        className="col-lg-7 mt_sm--30"
                    >
                        <div className="contant">
                            {data?.section_title && (
                                <SectionTitle {...data.section_title} />
                            )}
                            {data?.texts?.map((text, i) => (
                                <p className="discription" key={i}>
                                    {text.content}
                                </p>
                            ))}
                            {data?.buttons?.map(({ id, path, content }) => (
                                <Button key={id} path={path}>
                                    <span>{content}</span>
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

AboutArea.propTypes = {
    hasSeparator: PropTypes.bool,
    id: PropTypes.string,
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
        texts: PropTypes.arrayOf(PropTypes.shape(TextType)),
        images: PropTypes.arrayOf(PropTypes.shape(ImageType)),
        buttons: PropTypes.arrayOf(PropTypes.shape(ButtonType)),
    }),
};

AboutArea.defaultProps = {
    hasSeparator: false,
    id: "about",
};

export default AboutArea;
