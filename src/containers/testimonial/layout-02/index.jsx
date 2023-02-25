import React from "react";
import PropTypes from "prop-types";
import Testimonial from "@components/testimonial/layout-02";
import Slider, { SliderItem } from "@ui/slider";
import { ItemType } from "@utils/types";

const sliderOptions = {
    arrows: true,
    dots: true,
};

const TestimonialArea = ({ data }) => {
    return (
        <div
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-delay="200"
            data-aos-once="true"
            className="rn-testimonial-area testimonial-style-2 section-height"
        >
            <div className="inner">
                {data?.title && <h5 className="title">{data.title}</h5>}
                {data?.items && (
                    <Slider
                        options={sliderOptions}
                        prevIcon="ChevronLeft"
                        nextIcon="ChevronRight"
                        className="rn-testimonial-carousel testimonial-item-one rn-slick-dot-style dot-position-left slick-arrow-style-one arrow-top-align"
                    >
                        {data.items?.map((item) => (
                            <SliderItem key={item.id}>
                                <Testimonial
                                    image={item?.images?.[0]}
                                    title={item.title}
                                    designation={item.designation}
                                    desc={item.description}
                                />
                            </SliderItem>
                        ))}
                    </Slider>
                )}
            </div>
        </div>
    );
};

TestimonialArea.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string,
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
    }),
};

export default TestimonialArea;
