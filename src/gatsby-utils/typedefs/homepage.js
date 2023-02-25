module.exports = `
type HomePage implements Node {
    id: ID!
    title: String!
    content: [HomeContent]
}
type HomeContent {
    id: ID!
    section: String!
    headings: [Heading]
    texts: [Text]
	animated_texts: [String]
    items: [Item]
    section_title: SectionTitle
    images: [Image]
    buttons: [Button]
	skills: [Skill]
	inner: [InnerContent]
	video_link: String
}

type InnerContent {
	id: ID!
	inner_title: String
    section_title: SectionTitle
	title: String
	subtitle: String
	is_featured: Boolean
	price: String
	description: String
	orderLink: String
	deliveryTime: Int
	revission: String
    items: [Item]
}

type Item {
    id: ID!
    title: String
	subtitle: String
    description: String
    images: [Image]
    path: String
    icon: String,
	texts: [Text]
	stringList: [String]
	likeCount: Int
	rating: String
	value: Int
	designation: String
	projectTitle: String
	projectMeta: String
	available: Boolean
	timeRange: String
}
`;
