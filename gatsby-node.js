/* eslint-disable prettier/prettier */
const path = require("path");
const createSchemaCustomization = require("./src/gatsby-utils/createSchemaCustomization");
const onCreateNode = require("./src/gatsby-utils/onCreateNode");
// const createResolvers = require("./src/gatsby-utils/createResolvers");

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            alias: {
                "@components": path.resolve(__dirname, "./src/components"),
                "@ui": path.resolve(__dirname, "./src/components/ui"),
                "@containers": path.resolve(__dirname, "./src/containers"),
                "@layout": path.resolve(__dirname, "./src/layouts"),
                "@assets": path.resolve(__dirname, "./src/assets"),
                "@utils": path.resolve(__dirname, "./src/utils"),
                "@hooks": path.resolve(__dirname, "./src/hooks"),
            },
        },
    });
};

exports.createSchemaCustomization = createSchemaCustomization;

exports.onCreateNode = onCreateNode;

// exports.createResolvers = createResolvers;
