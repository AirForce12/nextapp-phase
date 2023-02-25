import PropTypes from "prop-types";

export const IDType = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);

export const ImageType = {
    src: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})])
        .isRequired,
    alt: PropTypes.string,
};

export const HeadingType = {
    content: PropTypes.string.isRequired,
};
export const TextType = {
    content: PropTypes.string.isRequired,
};

export const SectionTitleType = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    description: PropTypes.string,
};

export const SocialType = {
    id: IDType,
    icon: PropTypes.string,
    path: PropTypes.string,
    title: PropTypes.string,
};

export const SkillType = {
    id: IDType,
    title: PropTypes.string,
    image: PropTypes.shape(ImageType),
};

export const ItemType = {
    id: IDType,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    description: PropTypes.string,
    icon: PropTypes.string,
    path: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.shape(ImageType)),
    rating: PropTypes.string,
};

export const InnerType = {
    id: IDType,
    title: PropTypes.string,
    section_title: PropTypes.shape(SectionTitleType),
    subtitle: PropTypes.string,
    is_featured: PropTypes.bool,
    price: PropTypes.string,
    description: PropTypes.string,
    orderLink: PropTypes.string,
    deliveryTime: PropTypes.number,
    revission: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
};

export const MenuType = {
    id: IDType,
    text: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    icon: PropTypes.string,
    subMenu: PropTypes.arrayOf(PropTypes.shape({
        id: IDType,
        text: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
        icon: PropTypes.string,
    }))
};

export const ButtonType = {
    id: IDType,
    content: PropTypes.string,
    path: PropTypes.string,
};

export const BlogType = {
    title: PropTypes.string,
    slug: PropTypes.string,
    category: PropTypes.string,
    date: PropTypes.string,
    excerpt: PropTypes.string,
    content: PropTypes.string,
    image: PropTypes.shape(ImageType),
};
