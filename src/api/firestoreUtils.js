import valueTypes from './valueTypes';

const getTypeOf = (variable) =>
    ({}.toString.call(variable).slice(8, -1).toLowerCase());

const getDocumentId = ({ name }, collectionName) => {
    const re = collectionName
        ? new RegExp(`(?<=${collectionName}\/).+?(?=\/|$)`)
        : /\w+(?=$)/;
    return name.match(re)[0];
};

const parseField = (field) => {
    const type = Object.keys(field)[0];
    const value = field[type];

    switch (type) {
        case valueTypes.ARRAY:
            const array = value.values;
            return array.map(parseField);
        case valueTypes.MAP:
            const fields = value.fields;
            return applyParserToFields(fields, parseField);
        default:
            return value;
    }
};

const createField = (data) => {
    const type = getTypeOf(data);

    switch (type) {
        case 'string':
            return {
                [valueTypes.STRING]: data,
            };
        case 'number':
            return {
                [valueTypes.DOUBLE]: data,
            };
        case 'boolean':
            return {
                [valueTypes.BOOLEAN]: data,
            };
        case 'array':
            return {
                [valueTypes.ARRAY]: {
                    values: data.map(createField),
                },
            };
        case 'object':
            return {
                [valueTypes.MAP]: createDocument(data),
            };
        default:
            return null;
    }
};

const applyParserToFields = (rawData, parser) => {
    const fields = {};

    for (let key in rawData) {
        const data = rawData[key];
        fields[key] = parser(data);
    }

    return fields;
};

const createDocument = (object) => {
    return {
        fields: applyParserToFields(object, createField),
    };
};

const parseDocument = ({ document }) => {
    if (!document) return null;

    const decodedFields = applyParserToFields(document.fields, parseField);

    return {
        id: getDocumentId(document),
        createTime: document.createTime,
        ...decodedFields,
    };
};

export { createDocument, parseDocument, getDocumentId };
