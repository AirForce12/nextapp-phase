import React from "react";
import PropTypes from "prop-types";
import Image from "@ui/image";
import { ImageType } from "@utils/types";

const SkillItem = ({ image: { src, alt } }) => {
    return (
        <li>
            <Image src={src} alt={alt || "skill"} />
        </li>
    );
};

SkillItem.propTypes = {
    image: PropTypes.shape(ImageType).isRequired,
};

export default SkillItem;
