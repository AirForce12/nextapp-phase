import React, { useState } from "react";
import PropTypes from "prop-types";
import { ImageType, TextType } from "@utils/types";
import Image from "@ui/image";
import Anchor from "@ui/anchor";
import Icon from "@ui/icon";
import PortfolioModal from "@components/modal-portfolio";

const PortfolioCard = ({ title, category, likeCount, image, path, texts }) => {
    const [show, setShow] = useState(false);
    return (
        <>
            <div
                className="rn-portfolio"
                onClick={() => setShow(true)}
                onKeyPress={() => setShow(true)}
                role="button"
                tabIndex="-1"
            >
                <div className="inner">
                    <div className="thumbnail">
                        <Anchor path={path}>
                            <Image src={image.src} alt={image?.alt || title} />
                        </Anchor>
                    </div>
                    <div className="content">
                        <div className="category-info">
                            <div className="category-list">
                                <Anchor path={path}>{category}</Anchor>
                            </div>
                            <div className="meta">
                                <span>
                                    <button type="button">
                                        <Icon
                                            name="Heart"
                                            size={13}
                                            strokeWidth={3}
                                        />{" "}
                                        {likeCount && likeCount}
                                    </button>
                                </span>
                            </div>
                        </div>
                        <h4 className="title">
                            <Anchor path={path}>
                                {title}
                                <Icon name="ArrowUpRight" />
                            </Anchor>
                        </h4>
                    </div>
                </div>
            </div>
            <PortfolioModal
                show={show}
                setShow={setShow}
                title={title}
                category={category}
                image={image}
                texts={texts}
                path={path}
            />
        </>
    );
};

PortfolioCard.propTypes = {
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    likeCount: PropTypes.number,
    image: PropTypes.shape(ImageType).isRequired,
    path: PropTypes.string.isRequired,
    texts: PropTypes.arrayOf(PropTypes.shape(TextType)),
};

export default PortfolioCard;
