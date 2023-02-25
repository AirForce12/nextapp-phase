import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Check } from "react-feather";
import Image from "@ui/image";
import Button from "@ui/button";
import SectionTitle from "@components/section-title";
import {
    SectionTitleType,
    TextType,
    ImageType,
    ButtonType,
    ItemType,
} from "@utils/types";
import { StateContext } from "../../../context-api/toggle-switch-context/theme-mode-state";

const AboutArea = ({ data }) => {
    const { theme } = useContext(StateContext);

    return (
        <div className={`row ${theme == "light" ? " white-version" : ""}`}>
            <div className="col-lg-5">
                <div
                    className="image-area shadow-none padding-none"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="100"
                    data-aos-once="true"
                >
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
                        <SectionTitle
                            {...data.section_title}
                            titleClass="small-h2"
                        />
                    )}
                    {data?.texts?.[0] && (
                        <p className="discription color-body">
                            {data.texts[0]?.content}
                        </p>
                    )}

                    {data?.items && (
                        <ul className="about-skill-style mb--40">
                            {data.items?.map((item) => (
                                <li key={item.id}>
                                    <Check />
                                    <span>{item.title}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                    {data?.buttons?.map(({ id, path, className, content }) => (
                        <Button key={id} path={path} className={className}>
                            {content}
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    );
};

AboutArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
        texts: PropTypes.arrayOf(PropTypes.shape(TextType)),
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
        images: PropTypes.arrayOf(PropTypes.shape(ImageType)),
        buttons: PropTypes.arrayOf(PropTypes.shape(ButtonType)),
    }),
};

export default AboutArea;
