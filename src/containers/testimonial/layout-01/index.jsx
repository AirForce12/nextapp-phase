import React, { useContext } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import SectionTitle from "@components/section-title";
import Testimonial from "@components/testimonial/layout-01";
import Slider, { SliderItem } from "@ui/slider";
import { SectionTitleType, ItemType } from "@utils/types";
import { StateContext } from "../../../context-api/toggle-switch-context/theme-mode-state";

const TestimonialArea = ({ data, id, separator = true }) => {
    const { theme } = useContext(StateContext);

    return (
        <div
            className={clsx(
                `rn-testimonial-area rn-section-gap ${
                    theme == "light" ? " white-version" : ""
                }`,
                separator && "section-separator"
            )}
            id={id}
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        {data?.section_title && (
                            <SectionTitle
                                align="center"
                                {...data.section_title}
                            />
                        )}
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        {data?.items && (
                            <Slider
                                options={{ dots: true, arrows: true }}
                                className="testimonial-activation testimonial-pb mb--30"
                            >
                                {data.items?.map((item) => (
                                    <SliderItem
                                        className="mt--50 mt_md--40 mt_sm--40"
                                        key={item.id}
                                    >
                                        <Testimonial
                                            title={item.title}
                                            designation={item.designation}
                                            subtitle={item.subtitle}
                                            image={item?.images?.[0]}
                                            projectTitle={item.projectTitle}
                                            projectMeta={item.projectMeta}
                                            rating={item.rating}
                                            desc={item.description}
                                        />
                                    </SliderItem>
                                ))}
                            </Slider>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

TestimonialArea.propTypes = {
    id: PropTypes.string,
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
    }),
};

TestimonialArea.defaultProps = {
    id: "testimonial",
};

export default TestimonialArea;
