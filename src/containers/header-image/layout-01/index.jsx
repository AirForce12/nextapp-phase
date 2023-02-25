import React from "react";
import PropTypes from "prop-types";
import Image from "@ui/image";
import { ImageType } from "@utils/types";

const HeaderImage = ({ data }) => {
    return (
        <div className="rn-header-image-area">
            <div className="w-100 h-100">
                {data?.images?.[0]?.src && (
                    <Image
                        className="w-100 h-100"
                        src={data.images[0].src}
                        alt={data.images[0]?.alt || "Header BG"}
                    />
                )}
            </div>
        </div>
    );
};

HeaderImage.propTypes = {
    data: PropTypes.shape({
        images: PropTypes.arrayOf(PropTypes.shape(ImageType)),
    }),
};

export default HeaderImage;
