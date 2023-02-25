import React, { useState } from "react";
import PropTypes from "prop-types";
import ModalVideo from "../modal-video";

const VideoButton = ({ videoLink }) => {
    const isSSR = typeof window === "undefined";
    let video_arr, video_id, video_channel;
    if (videoLink) {
        video_arr = videoLink.split("=", -1);
        video_id = video_arr[1];
        video_channel = videoLink.split(".")[1];
    }
    const [videoOpen, setVideoOpen] = useState(false);
    const modalVideoOpen = () => {
        setVideoOpen(true);
    };
    const modalVideoClose = () => {
        setVideoOpen(false);
    };
    return (
        <>
            {!isSSR && (
                <>
                    <a
                        className="video-play-button"
                        href="#!"
                        onClick={modalVideoOpen}
                    >
                        <span></span>
                    </a>
                    <ModalVideo
                        channel={video_channel}
                        videoId={video_id}
                        isOpen={videoOpen}
                        onClose={modalVideoClose}
                    />
                </>
            )}
        </>
    );
};

VideoButton.propTypes = {
    videoLink: PropTypes.string,
};

export default VideoButton;
