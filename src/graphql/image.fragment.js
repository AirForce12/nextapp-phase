import { graphql } from "gatsby";

export const query = graphql`
    fragment Image on Image {
        src {
            childImageSharp {
                gatsbyImageData(
                    quality: 100
                    formats: WEBP
                    placeholder: DOMINANT_COLOR
                    outputPixelDensities: [0.25, 0.5, 1, 2]
                )
            }
        }
        alt
    }
`;
