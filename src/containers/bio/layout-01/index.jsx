import React from "react";
import PropTypes from "prop-types";
import Image from "@ui/image";
import Social, { SocialLink } from "@ui/social";
import Icon from "@ui/icon";
import { HeadingType, TextType, ImageType, SocialType } from "@utils/types";

const BioArea = ({ data }) => {
    return (
        <div className="row padding-tb m_dec-top align-items-center d-flex">
            <div className="col-lg-6">
                <div className="header-left">
                    <div className="header-thumbnail">
                        {data?.images?.[0]?.src && (
                            <Image
                                src={data.images[0].src}
                                alt={data.images[0]?.alt || "Bio"}
                            />
                        )}
                    </div>

                    <div className="header-info-content">
                        {data?.headings?.[0] && (
                            <h4 className="title">
                                {data.headings[0]?.content}
                            </h4>
                        )}
                        {data?.headings?.[1] && (
                            <div className="status-info">
                                {data.headings[1]?.content}
                            </div>
                        )}
                        {data?.socials && (
                            <div className="social-share-style-1 border-none mt--40">
                                <Social>
                                    {data.socials.map((social) => (
                                        <SocialLink
                                            key={social.id}
                                            path={social.path}
                                        >
                                            <Icon name={social.icon} />
                                        </SocialLink>
                                    ))}
                                </Social>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="header-right">
                    <ul className="rn-header-content">
                        {data?.texts?.[0] && (
                            <li>
                                <span className="overhead">EMAIL</span>
                                {data.texts[0]?.content}
                            </li>
                        )}
                        {data?.texts?.[1] && (
                            <li>
                                <span className="overhead">PHONE</span>
                                {data.texts[1]?.content}
                            </li>
                        )}
                    </ul>
                    <ul className="rn-header-content two">
                        {data?.texts?.[2] && (
                            <li>
                                <span className="overhead">BIRTHDAY</span>
                                {data.texts[2]?.content}
                            </li>
                        )}
                        {data?.texts?.[3] && (
                            <li>
                                <span className="overhead">LOCATION</span>
                                {data.texts[3]?.content}
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

BioArea.propTypes = {
    data: PropTypes.shape({
        headings: PropTypes.arrayOf(PropTypes.shape(HeadingType)),
        texts: PropTypes.arrayOf(PropTypes.shape(TextType)),
        images: PropTypes.arrayOf(PropTypes.shape(ImageType)),
        socials: PropTypes.arrayOf(PropTypes.shape(SocialType)),
    }),
};

export default BioArea;
