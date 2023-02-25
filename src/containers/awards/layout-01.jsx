import React, { useContext } from "react";
import PropTypes from "prop-types";
import Image from "@ui/image";
import { ImageType, SectionTitleType } from "@utils/types";
import { StateContext } from "../../context-api/toggle-switch-context/theme-mode-state";

const AwardsArea01 = ({ data }) => {
    const { theme } = useContext(StateContext);

    return (
        <section
            className={`awards-area-01 rn-section-gapBottom ${
                theme == "light" ? " white-version" : ""
            }`}
        >
            <div className="container">
                {data?.section_title && (
                    <h2
                        dangerouslySetInnerHTML={{
                            __html: data.section_title.title,
                        }}
                        className="awards-title"
                        data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-delay="100"
                        data-aos-once="true"
                    />
                )}
                {data?.images?.[0]?.src && (
                    <div
                        className="awards-image"
                        data-aos="fade-up"
                        data-aos-duration="600"
                        data-aos-delay="100"
                        data-aos-once="true"
                    >
                        <Image
                            src={data.images[0].src}
                            alt={data.images[0]?.alt || "awards"}
                        />
                    </div>
                )}
            </div>
        </section>
    );
};

AwardsArea01.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
        images: PropTypes.arrayOf(PropTypes.shape(ImageType)),
    }),
};

export default AwardsArea01;
