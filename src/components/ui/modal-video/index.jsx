import React from "react";
import PropTypes from "prop-types";
import ModalVideo from "react-modal-video";
import "./style.css";

const VideoModal = ({ channel, isOpen, videoId, onClose }) => {
    return (
        <div className="modal-video-wrapper">
            <ModalVideo
                channel={channel}
                isOpen={isOpen}
                videoId={videoId}
                onClose={onClose}
            />
        </div>
    );
};

VideoModal.propTypes = {
    channel: PropTypes.string,
    isOpen: PropTypes.bool,
    videoId: PropTypes.string,
    onClose: PropTypes.func,
};

export default VideoModal;
