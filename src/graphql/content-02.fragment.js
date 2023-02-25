import { graphql } from "gatsby";

export const query = graphql`
    fragment Content02 on HomeContent {
        id
        section
        title
        headings {
            ...Heading
        }
        animated_texts
        texts {
            ...Text
        }
        buttons {
            ...Button
        }
        images {
            ...Image
        }
        section_title {
            ...SectionTitle
        }
        items {
            ...Item
        }
    }
`;
