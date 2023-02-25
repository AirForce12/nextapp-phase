import React from "react";
import PropTypes from "prop-types";
import Testimonial from "@components/testimonial/layout-03";
import SectionTitle from "@components/section-title";
import Slider, { SliderItem } from "@ui/slider";
import { SectionTitleType, ItemType } from "@utils/types";

const sliderOptions = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    cssEase: "linear",
    adaptiveHeight: true,
    responsive: [
        {
            breakpoint: 1124,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
            },
        },
        {
            breakpoint: 577,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
            },
        },
    ],
};

const TestimonialArea = ({ data, id }) => {
    return (
        <div
            className="rn-testimonial-area testimonial-style-2 testimonial-with-carousel rn-section-gapTop pb--80 pb_md--50 section-separator"
            id={id}
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        {data?.section_title && (
                            <SectionTitle
                                data-aos="fade-up"
                                data-aos-duration="500"
                                data-aos-delay="100"
                                data-aos-once="true"
                                className="text-center mb--20 mb_md--20 mb_sm--20"
                                {...data.section_title}
                            />
                        )}
                    </div>
                </div>
                {data?.items && (
                    <Slider
                        className="testimonial-activation-item-3 slick-arrow-style-one mb--60"
                        data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-delay="300"
                        data-aos-once="true"
                        options={sliderOptions}
                        nextIcon="ArrowRight"
                        PrevIcon="ArrowLeft"
                    >
                        {data.items?.map((item) => (
                            <SliderItem key={item.id}>
                                <Testimonial
                                    title={item.title}
                                    designation={item.designation}
                                    image={item.image}
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
