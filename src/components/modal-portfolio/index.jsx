import React from "react";
import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import { X, ThumbsUp, ChevronRight } from "react-feather";
import Image from "@ui/image";
import Button from "@ui/button";
import { ImageType, TextType } from "@utils/types";

const PortfolioModal = ({
    show,
    setShow,
    image,
    title,
    category,
    path,
    texts,
}) => {
    return (
        <Modal
            show={show}
            onHide={() => setShow(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
            centered={true}
        >
            <Modal.Header>
                <Modal.Title
                    id="example-custom-modal-styling-title"
                    className="visually-hidden"
                >
                    Custom Modal Styling
                </Modal.Title>
                <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={() => setShow(false)}
                >
                    <span aria-hidden="true">
                        <X />
                    </span>
                </button>
            </Modal.Header>
            <Modal.Body>
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="portfolio-popup-thumbnail">
                            {image?.src && (
                                <div className="image">
                                    <Image
                                        src={image.src}
                                        alt={image?.alt || title}
                                        className="w-100"
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="text-content">
                            <h3>
                                <span>Featured - {category}</span> {title}
                            </h3>
                            {texts?.map((text, i) => (
                                <p
                                    className={
                                        i !== texts.length - 1 ? "mb--30" : ""
                                    }
                                    key={i}
                                >
                                    {text.content}
                                </p>
                            ))}
                            <div className="button-group mt--20">
                                <Button path={path} className="thumbs-icon">
                                    <span>LIKE THIS</span>
                                    <ThumbsUp />
                                </Button>
                                <Button path={path}>
                                    <span>VIEW PROJECT</span>
                                    <ChevronRight />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
};

PortfolioModal.propTypes = {
    show: PropTypes.bool.isRequired,
    setShow: PropTypes.func.isRequired,
    image: PropTypes.shape(ImageType).isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    texts: PropTypes.arrayOf(PropTypes.shape(TextType)),
};

export default PortfolioModal;
