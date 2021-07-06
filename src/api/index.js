import axios from 'axios';
import {
    createDocument,
    parseDocument,
    getDocumentId,
    getCreateTime,
} from './firestoreUtils';

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

    const entries = response.data;
    const threads = entries.map((entry) => {
        const threadId = getDocumentId(entry.document, 'threads');
        const post = parseDocument(entry);

        return {
            threadId,
            post,
        };
    });

    return threads;
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

    const entries = response.data;
    const posts = entries.map((x) => {
        return parseDocument(x);
    });

    return posts;
};

export const getAllThreadPosts = async (threadId) => {
    const response = await api.get(`/threads/${threadId}/posts`);

    const entries = response.data.documents;
    const posts = entries.map((x) => {
        return parseDocument({ document: x });
    });

    return posts;
};

export const createThread = async () => {
    const newThread = createDocument({});

    const response = await api.post('/threads', newThread);
    const threadId = getDocumentId(response.data);

    return threadId;
};

export const createPost = async (threadId, postData) => {
    const newPost = createDocument({ ...postData });

    const response = await api.post(`/threads/${threadId}/posts`, newPost);
    const postId = getDocumentId(response.data);
    const createTime = getCreateTime(response.data);

    return { postId, createTime };
};
