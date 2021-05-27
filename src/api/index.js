import axios from 'axios';

const api = axios.create({
    baseURL:
        'https://firestore.googleapis.com/v1beta1/projects/bitch-3ch/databases/(default)/documents',
});

export const getAllThreads = async () => {
    const response = await api.post(':runQuery', {
        structuredQuery: {
            from: [{ collectionId: 'posts', allDescendants: true }],
            where: {
                fieldFilter: {
                    field: {
                        fieldPath: 'op',
                    },
                    op: 'EQUAL',
                    value: {
                        booleanValue: true,
                    },
                },
            },
        },
    });
};

export const getThreadPosts = async (threadId) => {
    const response = await api.post(`/threads/${threadId}:runQuery`, {
        structuredQuery: {
            from: [{ collectionId: 'posts' }],
            where: {
                fieldFilter: {
                    field: {
                        fieldPath: 'op',
                    },
                    op: 'EQUAL',
                    value: {
                        booleanValue: false,
                    },
                },
            },
        },
    });
};

export const createThread = async ({ text }) => {
    const responseThread = await api.post('/threads', { fields: {} });
    const threadId = responseThread.data.name.match(/(?<=\/)\w+$/)[0];
    const responseOpPost = await api.post(`/threads/${threadId}/posts`, {
        fields: {
            op: { booleanValue: true },
            text: { stringValue: text },
        },
    });
};

export const createPost = async ({ threadId, post: { text } }) => {
    const response = await api.post(`/threads/OEmSgg272uuviDV0aDyP/posts`, {
        fields: {
            op: { booleanValue: false },
            text: { stringValue: text },
        },
    });
};
