import React from "react";
import PropTypes from "prop-types";
import { Parallax, Background } from "react-parallax";
import Image from "@ui/image";
import { ImageType } from "@utils/types";

const ParallaxArea = ({ data }) => {
    return (
        <div className="bg-image-area-fitness attachment bg_image--8 bg_image position-relative">
            <Parallax strength={200} className="w-100 h-100">
                <Background className="w-100 h-100">
                    {data?.images?.[0]?.src && (
                        <Image src={data.images[0].src} alt="parallax" />
                    )}
                </Background>
            </Parallax>
        </div>
    );
};

ParallaxArea.propTypes = {
    data: PropTypes.shape({
        images: PropTypes.arrayOf(PropTypes.shape(ImageType)),
    }),
};

export default ParallaxArea;
