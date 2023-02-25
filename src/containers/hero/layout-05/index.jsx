import React from "react";
import PropTypes from "prop-types";
import { User } from "react-feather";
import Button from "@ui/button";
import Image from "@ui/image";
import Icon from "@ui/icon";
import {
    ImageType,
    HeadingType,
    TextType,
    ButtonType,
    ItemType,
} from "@utils/types";

const HeroArea = ({ data, id }) => {
    return (
        <div id={id} className="rn-slide-area">
            <div className="slide slider-style-3">
                <div className="container">
                    <div className="row slider-wrapper">
                        <div className="order-2 order-xl-1 col-lg-12 col-xl-5 mt_lg--50 mt_md--50 mt_sm--50">
                            <div className="slider-info">
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-12">
                                        <div className="user-info-top">
                                            <div className="user-info-header">
                                                <div className="user">
                                                    <User />
                                                </div>
                                                {data?.headings?.[0] && (
                                                    <h2
                                                        className="title"
                                                        dangerouslySetInnerHTML={{
                                                            __html: data
                                                                .headings[0]
                                                                ?.content,
                                                        }}
                                                    />
                                                )}
                                                {data?.texts?.[0] && (
                                                    <p className="disc">
                                                        {data.texts[0].content}
                                                    </p>
                                                )}
                                            </div>
                                            {data?.items && (
                                                <div className="user-info-footer">
                                                    {data.items.map((item) => (
                                                        <div
                                                            key={item.id}
                                                            className="info"
                                                        >
                                                            <Icon
                                                                name={item.icon}
                                                            />
                                                            {item?.title && (
                                                                <span>
                                                                    {item.title}
                                                                </span>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="col-xl-12 col-lg-12 col-12">
                                        <div className="user-info-bottom">
                                            {data?.headings?.[1] && (
                                                <span>
                                                    {data.headings[1]?.content}
                                                </span>
                                            )}
                                            <div className="button-wrapper d-flex">
                                                {data?.buttons?.map(
                                                    (
                                                        { id, path, content },
                                                        i
                                                    ) => (
                                                        <Button
                                                            key={id}
                                                            className={
                                                                i === 0
                                                                    ? "mr--30"
                                                                    : ""
                                                            }
                                                            path={path}
                                                        >
                                                            <span>
                                                                {content}
                                                            </span>
                                                        </Button>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 order-xl-2 col-lg-12 col-xl-7">
                            <div className="background-image-area">
                                {data?.images?.[0].src && (
                                    <div className="thumbnail-image">
                                        <Image
                                            src={data.images[0].src}
                                            alt={
                                                data.images[0]?.alt ||
                                                "Personal Portfolio"
                                            }
                                        />
                                    </div>
                                )}
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
        buttons: PropTypes.arrayOf(PropTypes.shape(ButtonType)),
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
        images: PropTypes.arrayOf(PropTypes.shape(ImageType)),
    }),
};

HeroArea.defaultProps = {
    id: "home",
};

export default HeroArea;
