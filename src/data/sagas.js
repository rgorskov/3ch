import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { createPost, getAllThreadPosts, getAllThreads } from '../api';
import {
    getPosts,
    getPostsSuccess,
    getThreads,
    getThreadsSuccess,
    sendPost,
    sendPostSuccess,
    setPostsFetching,
    setPostsLoaded,
    setThreadsFetching,
    setThreadsLoaded,
} from './actions';

function* getThreadsWorker() {
    yield put(setThreadsFetching(true));

    const threads = yield call(getAllThreads);

    yield all([
        put(setThreadsFetching(false)),
        put(setThreadsLoaded()),
        put(getThreadsSuccess(threads)),
    ]);
}

function* watchGetThreads() {
    const action = getThreads().type;
    yield takeEvery(action, getThreadsWorker);
}

function* getPostsWorker({ payload: threadId }) {
    yield put(setPostsFetching(threadId, true));

    const posts = yield call(getAllThreadPosts, threadId);

    yield all([
        put(setPostsFetching(threadId, false)),
        put(setPostsLoaded(threadId)),
        put(getPostsSuccess(threadId, posts)),
    ]);
}

function* watchGetPosts() {
    const action = getPosts().type;
    yield takeEvery(action, getPostsWorker);
}

function* sendPostWorker({ payload: { threadId, post } }) {
    const newPostData = yield call(createPost, threadId, post);

    yield put(sendPostSuccess(threadId, { ...post, ...newPostData }));
}

function* watchSendPost() {
    const action = sendPost().type;
    yield takeEvery(action, sendPostWorker);
}

export default function* rootSaga() {
    yield all([
        fork(watchGetThreads),
        fork(watchGetPosts),
        fork(watchSendPost),
    ]);
}
