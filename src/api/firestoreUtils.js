import valueTypes from './valueTypes';

const getDocumentId = (path, collectionName) => {
    const re = new RegExp(`(?<=${collectionName}\/).+?(?=\/|$)`);
    return path.match(re)[0];
};

const decodeField = (field) => {
    const type = Object.keys(field)[0];
    const value = field[type];

    switch (type) {
        case valueTypes.ARRAY:
            const array = value.values;
            return array.map(decodeField);
        case valueTypes.MAP:
            const fields = value.fields;
            return decodeAllFields(fields);
        default:
            return value;
    }
};

const decodeAllFields = (encodedFields) => {
    const fields = {};

    for (let key in encodedFields) {
        const encodedField = encodedFields[key];
        fields[key] = decodeField(encodedField);
    }

    return fields;
};

const encodeDocument = (object) => {};

const decodeDocument = ({ document, collectionName }) => {
    if (!document) return null;
    return {
        id: getDocumentId(document.name, collectionName),
        createTime: document.createTime,
        ...decodeAllFields(document.fields),
    };
};

export { encodeDocument, decodeDocument, getDocumentId };
