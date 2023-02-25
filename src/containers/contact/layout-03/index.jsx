import React from "react";
import PropTypes from "prop-types";
import ContactForm from "@components/contact-form";

const ContactArea = ({ data }) => {
    return (
        <div
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-delay="200"
            data-aos-once="true"
            className="rn-contact-area section-height"
        >
            <div className="inner">
                <h5 className="title">Contact With Me</h5>
                <ContactForm url={data.getform_url} />
            </div>
        </div>
    );
};

ContactArea.propTypes = {
    data: PropTypes.shape({
        getform_url: PropTypes.string,
    }),
};

export default ContactArea;
