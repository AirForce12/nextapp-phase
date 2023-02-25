import { graphql } from "gatsby";

export const query = graphql`
    fragment Heading on Heading {
        content
    }
`;
