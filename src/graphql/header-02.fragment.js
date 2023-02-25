import { graphql } from "gatsby";

export const query = graphql`
    fragment Header02 on General {
        slogan
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
    }
`;
