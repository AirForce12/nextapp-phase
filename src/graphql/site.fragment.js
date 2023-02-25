import { graphql } from "gatsby";

export const query = graphql`
    fragment Site on Site {
        siteMetadata {
            socials {
                ...Social
            }
            contact {
                phone
                email
            }
            getform_url
        }
    }
`;
