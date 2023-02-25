import React from "react";
import PropTypes from "prop-types";
import cn from "clsx";
import Button from "@ui/button";
import Image from "@ui/image";
import { ImageType } from "@utils/types";

const SkillCard = ({
    timeRange,
    title,
    subtitle,
    desc,
    path,
    image,
    className,
    ...restProps
}) => {
    return (
        <div className={cn("experience-style-two", className)} {...restProps}>
            <div className="experience-left">
                {image?.src && (
                    <div className="experience-image">
                        <Image src={image.src} alt={image?.alt || title} />
                    </div>
                )}

                <div className="experience-center">
                    {timeRange && <span className="date">{timeRange}</span>}
                    {title && <h4 className="experience-title">{title}</h4>}
                    {subtitle && <h6 className="subtitle">{subtitle}</h6>}
                    {desc && <p className="disc">{desc}</p>}
                </div>
            </div>
            <div className="experience-right">
                <div className="experience-footer">
                    <Button path={path}>CONTACT ME</Button>
                </div>
            </div>
        </div>
    );
};

SkillCard.propTypes = {
    timeRange: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    desc: PropTypes.string,
    path: PropTypes.string,
    image: PropTypes.shape(ImageType),
    className: PropTypes.string,
};

export default SkillCard;
