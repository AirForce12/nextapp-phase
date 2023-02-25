import { graphql } from "gatsby";

export const query = graphql`
    fragment Content01 on HomeContent {
        id
        section
        title
        video_link
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
        skills {
            ...Skill
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
        inner {
            ...InnerContent01
        }
    }
`;
