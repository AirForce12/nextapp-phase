import React from "react";
import SlickSlider from "react-slick";
import PropTypes from "prop-types";
import cn from "clsx";
import Icon from "@ui/icon";
import "./style.scss";

const ArrowButton = ({ onClick, icon, className }) => (
    <button onClick={onClick} className={cn("slide-arrow", className)}>
        <Icon name={icon} />
    </button>
);

ArrowButton.propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string,
    icon: PropTypes.string,
};

const Slider = ({ options, children, prevIcon, nextIcon, className }) => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <ArrowButton className="prev-arrow" icon={prevIcon} />,
        nextArrow: <ArrowButton className="next-arrow" icon={nextIcon} />,
        ...options,
    };
    return (
        <SlickSlider className={cn(className)} {...settings}>
            {children}
        </SlickSlider>
    );
};

Slider.propTypes = {
    options: PropTypes.shape({
        dots: PropTypes.bool,
        infinite: PropTypes.bool,
        speed: PropTypes.bool,
        slidesToShow: PropTypes.number,
        slidesToScroll: PropTypes.number,
        autoplay: PropTypes.bool,
        breakpoints: PropTypes.shape({}),
    }),
    prevIcon: PropTypes.string,
    nextIcon: PropTypes.string,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

Slider.defaultProps = {
    prevIcon: "ArrowLeft",
    nextIcon: "ArrowRight",
};

export default Slider;

export const SliderItem = ({ children, className }) => {
    return <div className={cn(className, "slider-item")}>{children}</div>;
};

SliderItem.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};
