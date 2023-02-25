import React from "react";
import PropTypes from "prop-types";
import { Typewriter } from "react-simple-typewriter";
import Social, { SocialLink } from "@ui/social";
import SkillShare, { SkillItem } from "@ui/skill-share";
import Image from "@ui/image";
import Icon from "@ui/icon";
import {
    ImageType,
    HeadingType,
    TextType,
    SocialType,
    SkillType,
} from "@utils/types";

const HeroArea = ({ data, id }) => {
    return (
        <div id={id} className="rn-slider-area">
            <div className="slide slider-style-1">
                <div className="container">
                    <div className="row row--30 align-items-center">
                        <div className="order-2 order-lg-1 col-lg-7 mt_md--50 mt_sm--50 mt_lg--30">
                            <div className="content">
                                <div className="inner">
                                    {data?.headings?.[0] && (
                                        <span className="subtitle">
                                            {data.headings[0].content}
                                        </span>
                                    )}

                                    {data?.headings?.[1] && (
                                        <h1 className="title">
                                            <span
                                                className="title-main"
                                                dangerouslySetInnerHTML={{
                                                    __html: data.headings[1]
                                                        .content,
                                                }}
                                            />
                                            <br />
                                            {data?.animated_texts && (
                                                <span
                                                    className="header-caption"
                                                    id="page-top"
                                                >
                                                    <span className="cd-headline clip is-full-width">
                                                        <span>a </span>{" "}
                                                        <Typewriter
                                                            words={
                                                                data.animated_texts
                                                            }
                                                            loop
                                                            cursor
                                                        />
                                                    </span>
                                                </span>
                                            )}
                                        </h1>
                                    )}
                                    {data?.texts?.[0] && (
                                        <div>
                                            <p className="description">
                                                {data.texts[0].content}
                                            </p>
                                        </div>
                                    )}
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-12">
                                        {data?.socials && (
                                            <div className="social-share-inner-left">
                                                <span className="title">
                                                    find with me
                                                </span>
                                                <Social>
                                                    {data.socials.map(
                                                        (social) => (
                                                            <SocialLink
                                                                key={social.id}
                                                                path={
                                                                    social.path
                                                                }
                                                            >
                                                                <Icon
                                                                    name={
                                                                        social.icon
                                                                    }
                                                                />
                                                            </SocialLink>
                                                        )
                                                    )}
                                                </Social>
                                            </div>
                                        )}
                                    </div>
                                    <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-12 mt_mobile--30">
                                        {data?.skills && (
                                            <div className="skill-share-inner">
                                                <span className="title">
                                                    best skill on
                                                </span>
                                                <SkillShare>
                                                    {data.skills.map(
                                                        (skill) => (
                                                            <SkillItem
                                                                key={skill.id}
                                                                image={
                                                                    skill.image
                                                                }
                                                            />
                                                        )
                                                    )}
                                                </SkillShare>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 order-lg-2 col-lg-5">
                            {data?.images?.[0]?.src && (
                                <div className="thumbnail">
                                    <div className="inner">
                                        <Image
                                            src={data.images[0].src}
                                            alt={data.images[0]?.alt || "Hero"}
                                        />
                                    </div>
                                </div>
                            )}
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
        animated_texts: PropTypes.arrayOf(PropTypes.string),
        socials: PropTypes.arrayOf(PropTypes.shape(SocialType)),
        skills: PropTypes.arrayOf(PropTypes.shape(SkillType)),
        images: PropTypes.arrayOf(PropTypes.shape(ImageType)),
    }),
};

HeroArea.defaultProps = {
    id: "home",
};

export default HeroArea;
