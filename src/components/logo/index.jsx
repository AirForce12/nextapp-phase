import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import cn from "clsx";
import Image from "@ui/image";
import { ImageType } from "@utils/types";

const Logo = ({ className, image }) => {
    return (
        <div className={cn("logo", className)}>
            <Link to="/">
                {image?.src && (
                    <Image src={image.src} alt={image?.alt || "logo"} />
                )}
            </Link>
        </div>
    );
};

Logo.propTypes = {
    className: PropTypes.string,
    image: PropTypes.shape(ImageType),
};

export default Logo;
