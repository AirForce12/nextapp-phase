import React from "react";
import PropTypes from "prop-types";
import Image from "@ui/image";
import { ImageType, HeadingType, TextType } from "@utils/types";

const HeroAreaFourteen = ({ data, id }) => {
    return (
        <section className="hero-area-14" id={id}>
            <div className="container">
                <div className="intro">
                    {data?.texts?.[0] && (
                        <p
                            className="intro__text-top"
                            dangerouslySetInnerHTML={{
                                __html: data.texts[0].content,
                            }}
                        />
                    )}
                    {data?.headings?.[0] && (
                        <h2
                            className="intro__heading-primary"
                            dangerouslySetInnerHTML={{
                                __html: data.headings[0].content,
                            }}
                        />
                    )}
                    {data?.headings?.[1] && (
                        <h3
                            className="intro__heading-stroke"
                            dangerouslySetInnerHTML={{
                                __html: data.headings[1].content,
                            }}
                        />
                    )}
                    {data?.texts?.[1] && (
                        <p
                            className="intro__text-bottom"
                            dangerouslySetInnerHTML={{
                                __html: data.texts[1].content,
                            }}
                        />
                    )}
                </div>
                {data?.images?.[0]?.src && (
                    <div className="banner-image">
                        <Image
                            src={data.images[0].src}
                            alt={data.images[0]?.alt || "Hero"}
                        />
                    </div>
                )}
                {data?.images?.[1]?.src && (
                    <div className="client-logos">
                        <Image
                            src={data.images[1].src}
                            alt={data.images[1]?.alt || "Hero"}
                        />
                    </div>
                )}
            </div>
        </section>
    );
};

HeroAreaFourteen.propTypes = {
    data: PropTypes.shape({
        headings: PropTypes.arrayOf(PropTypes.shape(HeadingType)),
        texts: PropTypes.arrayOf(PropTypes.shape(TextType)),
        images: PropTypes.arrayOf(PropTypes.shape(ImageType)),
    }),
    id: PropTypes.string,
};

export default HeroAreaFourteen;
