import React from "react";
import PropTypes from "prop-types";
import ContactForm from "@components/contact-form";
import ContactInfoCard from "@components/contact-info-card";
import {
    SectionTitleType,
    HeadingType,
    TextType,
    ImageType,
    SocialType,
} from "@utils/types";

const ContactArea = ({ data, id }) => {
    return (
        <div className="rn-contact-area" id={id}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <ContactInfoCard
                            image={data?.images?.[0]}
                            title={data?.headings?.[0].content}
                            subtitle={data?.headings?.[1].content}
                            desc={data?.texts?.[0].content}
                            phone={data?.phone}
                            email={data?.email}
                            socials={data?.socials}
                        />
                    </div>
                    <div
                        data-aos-delay="600"
                        className="col-lg-7 contact-input"
                    >
                        <ContactForm url={data.getform_url} className="ml--0" />
                    </div>
                </div>
            </div>
        </div>
    );
};

ContactArea.propTypes = {
    id: PropTypes.string,
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
        headings: PropTypes.arrayOf(PropTypes.shape(HeadingType)),
        texts: PropTypes.arrayOf(PropTypes.shape(TextType)),
        images: PropTypes.arrayOf(PropTypes.shape(ImageType)),
        socials: PropTypes.arrayOf(PropTypes.shape(SocialType)),
        phone: PropTypes.string,
        email: PropTypes.string,
        getform_url: PropTypes.string,
    }),
};

ContactArea.defaultProps = {
    id: "contacts",
};

export default ContactArea;
