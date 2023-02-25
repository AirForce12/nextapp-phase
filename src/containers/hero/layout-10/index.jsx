import React from "react";
import PropTypes from "prop-types";
import Image from "@ui/image";
import Button from "@ui/button";
import Sticky from "@ui/sticky";
import { HeadingType, TextType, ButtonType, ImageType } from "@utils/types";

const HeroArea = ({ data }) => {
    return (
        <div className="d-flex flex-wrap align-content-start h-100">
            <Sticky className="sticky-top-slider" top="200px">
                <div className="banner-details-wrapper-sticky slide">
                    {data?.images?.[0]?.src && (
                        <div className="thumbnail">
                            <Image
                                src={data.images[0].src}
                                alt={
                                    data.images[0]?.alt || "Personal Portfolio"
                                }
                            />
                        </div>
                    )}

                    <div className="banner-title-area pt--30">
                        {data?.headings?.[0] && (
                            <h1
                                className="title"
                                dangerouslySetInnerHTML={{
                                    __html: data.headings[0]?.content,
                                }}
                            />
                        )}
                        {data?.texts?.[0] && (
                            <p className="disc">{data.texts[0]?.content}</p>
                        )}
                    </div>
                    <div className="button-group text-center text-md-start pt--60 pt_md--40 pt_sm--40">
                        {data?.buttons?.map(({ id, path, content }) => (
                            <Button key={id} path={path}>
                                <span>{content}</span>
                            </Button>
                        ))}
                    </div>
                </div>
            </Sticky>
        </div>
    );
};

HeroArea.propTypes = {
    data: PropTypes.shape({
        headings: PropTypes.arrayOf(PropTypes.shape(HeadingType)),
        texts: PropTypes.arrayOf(PropTypes.shape(TextType)),
        images: PropTypes.arrayOf(PropTypes.shape(ImageType)),
        buttons: PropTypes.arrayOf(PropTypes.shape(ButtonType)),
    }),
};

export default HeroArea;
