import React from "react";
import PropTypes from "prop-types";
import cn from "clsx";
import Image from "@ui/image";
import { ImageType } from "@utils/types";

const ClientCard = ({ title, image, className, ...rest }) => {
    return (
        <div className={cn("rn-brand flex-basis-style-1", className)} {...rest}>
            <div className="border-style shadow-none inner smlg-brand text-center">
                <div className="thumbnail">
                    <a href="#!">
                        <Image src={image.src} alt={image?.alt || title} />
                    </a>
                </div>
                <div className="seperator"></div>
                <div className="client-name">
                    <span>
                        <a href="#!">{title}</a>
                    </span>
                </div>
            </div>
        </div>
    );
};

ClientCard.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.shape(ImageType).isRequired,
    className: PropTypes.string,
};

export default ClientCard;
