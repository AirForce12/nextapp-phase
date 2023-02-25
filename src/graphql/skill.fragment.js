import { graphql } from "gatsby";

export const query = graphql`
    fragment Skill on Skill {
        id
        title
        image {
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
    }
`;
