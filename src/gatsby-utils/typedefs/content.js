module.exports = `
type Social {
    id: ID!
    icon: String
    path: String
    title: String
}

type Skill {
	id: ID!
	title: String
	image: Image
}

type Heading {
    content: String!
}
type Text {
    content: String!
}
type Image @infer{
    src: File @fileByRelativePath
    alt: String
}
type SectionTitle {
    id: ID!
    title: String
    subtitle: String
    description: String
}
type Button {
    id: ID!
    content: String!
    path: String
	className: String
}
`;
