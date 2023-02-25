import { forwardRef } from "react";
import PropTypes from "prop-types";
import cn from "clsx";
import { Navigation, Pagination, Autoplay, A11y } from "swiper";
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from "swiper/react";
import Icon from "@ui/icon";

const SwiperSlider = forwardRef(
    (
        {
            options,
            prevIcon,
            nextIcon,
            navStyle,
            navPosition,
            shadowSize,
            dotStyle,
            dotPosition,
            children,
            className,
            navClass,
        },
        ref
    ) => {
        const modules = options?.modules !== undefined ? options.modules : [];
        const prevClass = `prev-${navClass || "swiper-nav"}`;
        const nextClass = `next-${navClass || "swiper-nav"}`;
        const sliderOptions = {
            slidesPerView: 3,
            spaceBetween: 30,
            loop: false,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            watchSlidesProgress: true,
            autoHeight: true,
            breakpoints: {},
            ...options,
            modules: [Navigation, Pagination, A11y, Autoplay, ...modules],
            navigation: options?.navigation
                ? {
                      prevEl: `.${prevClass}`,
                      nextEl: `.${nextClass}`,
                  }
                : false,
            pagination: options?.pagination
                ? {
                      clickable: true,
                  }
                : false,
        };

        return (
            <div
                className={cn(
                    className,
                    "swiper-wrap tw-relative",
                    navStyle && `nav-style-${navStyle}`,
                    navPosition && `nav-position-${navPosition}`,
                    dotStyle && `dot-style-${dotStyle}`,
                    dotPosition && `dot-position-${dotPosition}`,
                    shadowSize && `shadow-size-${shadowSize}`
                )}
                ref={ref}
            >
                <Swiper {...sliderOptions}>{children}</Swiper>

                {sliderOptions?.navigation && (
                    <>
                        <button
                            onClick={onClick}
                            className={`swiper-btn swiper-btn-prev ${prevClass}`}
                        >
                            <Icon name={prevIcon} />
                        </button>
                        <button
                            type="button"
                            className={`swiper-btn swiper-btn-next ${nextClass}`}
                        >
                            <Icon name={nextIcon} />
                        </button>
                    </>
                )}
            </div>
        );
    }
);

export { SwiperSlide };

SwiperSlider.displayName = "SwiperSlider";

SwiperSlider.propTypes = {
    options: PropTypes.shape({
        modules: PropTypes.array,
        slidesPerView: PropTypes.number,
        spaceBetween: PropTypes.number,
        watchSlidesProgress: PropTypes.bool,
        autoHeight: PropTypes.boolean,
        speed: PropTypes.number,
        centeredSlides: PropTypes.bool,
        effect: PropTypes.oneOf([
            "slide",
            "fade",
            "cube",
            "coverflow",
            "flip",
            "creative",
            "cards",
        ]),
        navigation: PropTypes.bool,
        pagination: PropTypes.bool,
        loop: PropTypes.bool,
        autoplay: PropTypes.bool,
        breakpoints: PropTypes.shape({}),
    }),
    prevIcon: PropTypes.string,
    nextIcon: PropTypes.string,
    navStyle: PropTypes.oneOf(["default", "style-1", "style-2"]),
    navPosition: PropTypes.oneOf(["top", "bottom"]),
    shadowSize: PropTypes.oneOf(["small", "medium", "large"]),
    dotStyle: PropTypes.oneOf(["default", "style-1", "style-2"]),
    dotPosition: PropTypes.oneOf(["top", "bottom"]),
    children: PropTypes.node,
    className: PropTypes.string,
    navClass: PropTypes.string,
};

SwiperSlider.defaultProps = {
    prevIcon: "ArrowLeft",
    nextIcon: "ArrowRight",
    navStyle: 1,
    dotStyle: 1,
};

export default SwiperSlider;
