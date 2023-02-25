import React from "react";
import { ImageType } from "@utils/types";
import Image from "@ui/image";
import PropTypes from "prop-types";

const ClientCard = ({ image, name, path, ...rest }) => {
    return (
        <div className="main-content" {...rest}>
            <div className="inner text-center">
                {image?.src && (
                    <div className="thumbnail">
                        <a href={path}>
                            <Image src={image.src} alt={image?.alt || name} />
                        </a>
                    </div>
                )}
                <div className="seperator"></div>
                <div className="client-name">
                    <span>
                        <a href={path}>{name}</a>
                    </span>
                </div>
            </div>
        </div>
    );
};

ClientCard.propTypes = {
    image: PropTypes.shape(ImageType).isRequired,
    name: PropTypes.string.isRequired,
    path: PropTypes.string,
};

ClientCard.defaultProps = {
    path: "#!",
};

export default ClientCard;
