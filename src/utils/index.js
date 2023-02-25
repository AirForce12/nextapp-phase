function sliceIntoChunks(arr, chunkSize) {
    const middle = Math.ceil(arr.length / chunkSize);
    const arr1 = arr.slice(0, middle);
    const arr2 = arr.slice(middle, arr.length);
    return [arr1, arr2];
}

function normalizedData(data) {
    let allContetnt;

    data.forEach((item) => {
        const newObj = Object.entries(item).reduce((acc, cur) => {
            const [key, property] = cur;
            if (property === null) {
                return acc;
            }
            return {
                ...acc,
                [key]: property,
            };
        }, {});

        allContetnt = {
            ...allContetnt,
            [newObj.section]: {
                ...newObj,
            },
        };
    });

    return allContetnt;
}

const slugify = function (text) {
    return text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, "-") // Replace spaces with -
        .replace(/[^\w-]+/g, "") // Remove all non-word chars
        .replace(/--+/g, "-") // Replace multiple - with single -
        .replace(/^-+/, "") // Trim - from start of text
        .replace(/-+$/, ""); // Trim - from end of text
};

module.exports = {
    sliceIntoChunks,
    normalizedData,
    slugify,
};
