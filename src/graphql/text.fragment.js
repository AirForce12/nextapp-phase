import { graphql } from "gatsby";

export const query = graphql`
    fragment Text on Text {
        content
    }
`;
