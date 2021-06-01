import axios from 'axios';
import { createDocument, parseDocument, getDocumentId } from './firestoreUtils';

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
    const threads = entries.map((x) => {
        return parseDocument({ collectionName: 'threads', ...x });
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
        return parseDocument({ collectionName: 'posts', ...x });
    });

    return posts;
};

export const createThread = async () => {
    const newThread = createDocument({});

    const response = await api.post('/threads', newThread);
    const threadId = getDocumentId(response.data.name, 'threads');

    return threadId;
};

export const createPost = async (threadId, postData) => {
    const newPost = createDocument({ ...postData, op: false });

    const response = await api.post(`/threads/${threadId}/posts`, newPost);
    const postId = getDocumentId(response.data.name, 'posts');

    return postId;
};
