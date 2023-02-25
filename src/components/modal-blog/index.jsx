import React from "react";
import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import { X } from "react-feather";
import Image from "@ui/image";
import { ImageType } from "@utils/types";
import Comment from "../comment";

const BlogModal = ({
    show,
    setShow,
    image,
    title,
    date,
    content,
    id,
    slug,
}) => {
    return (
        <Modal
            show={show}
            onHide={() => setShow(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
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
                {image?.src && (
                    <Image
                        src={image.src}
                        alt={image?.alt || title}
                        className="img-fluid modal-feat-img"
                    />
                )}

                <div className="news-details">
                    <span className="date">{date}</span>
                    <h2 className="title">{title}</h2>
                    <div dangerouslySetInnerHTML={{ __html: content }} />
                </div>
                <Comment slug={slug} id={id} title={title} />
            </Modal.Body>
        </Modal>
    );
};

BlogModal.propTypes = {
    show: PropTypes.bool.isRequired,
    setShow: PropTypes.func.isRequired,
    image: PropTypes.shape(ImageType).isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};

export default BlogModal;
