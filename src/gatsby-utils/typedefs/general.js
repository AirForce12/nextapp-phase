module.exports = `
type General implements Node @childOf(types: ["GeneralJson"]){
    id: ID!
    section: String!
    menu: [Menu]
	button: Button
	copyright_text: String
	logo: [Image]
	slogan: String
	widgets: [Widget]
}
type Widget {
	id: ID!
	title: String
	menu: [Menu]
}
type Menu {
    id: ID!
    text: String!
    path: String!
	icon: String
}
`;
