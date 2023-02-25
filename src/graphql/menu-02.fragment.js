import { graphql } from "gatsby";

export const query = graphql`
    fragment Menu02 on Menu {
        id
        text
        path
        icon
    }
`;
