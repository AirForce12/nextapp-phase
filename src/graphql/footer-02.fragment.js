import { graphql } from "gatsby";

export const query = graphql`
    fragment Footer02 on General {
        logo {
            src {
                childImageSharp {
                    gatsbyImageData(
                        quality: 100
                        formats: WEBP
                        placeholder: DOMINANT_COLOR
                    )
                }
            }
            alt
        }
        copyright_text
        widgets {
            id
            title
            menu {
                id
                text
                path
            }
        }
    }
`;
