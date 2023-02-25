import { graphql } from "gatsby";

export const query = graphql`
    fragment SectionTitle on SectionTitle {
        title
        subtitle
        description
    }
`;
