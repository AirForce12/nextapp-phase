import React from "react";
import PropTypes from "prop-types";
import { Typewriter } from "react-simple-typewriter";
import Social, { SocialLink } from "@ui/social";
import SkillShare, { SkillItem } from "@ui/skill-share";
import Icon from "@ui/icon";
import Image from "@ui/image";
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
            <div className="slide slider-style-2">
                <div className="container">
                    <div className="row align-items-center row--30">
                        <div className="col-lg-5">
                            {data?.images?.[0]?.src && (
                                <div className="thumbnail style-2">
                                    <div className="inner">
                                        <Image
                                            src={data.images[0].src}
                                            alt={data.images[0]?.alt || "Hero"}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="col-lg-7 mt_md--40 mt_sm--40">
                            <div className="content">
                                <div className="inner">
                                    {data?.headings?.[0] && (
                                        <h1 className="title">
                                            <span
                                                className="title-main"
                                                dangerouslySetInnerHTML={{
                                                    __html: data.headings[0]
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

                                    <div>
                                        {data?.texts?.[0] && (
                                            <div>
                                                <p className="description">
                                                    {data.texts[0].content}
                                                </p>
                                            </div>
                                        )}
                                    </div>
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
