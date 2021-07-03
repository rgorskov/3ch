import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { getAllThreadPosts, getAllThreads } from '../api';
import {
    getPosts,
    getPostsSuccess,
    getThreads,
    getThreadsSuccess,
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

export default function* rootSaga() {
    yield all([fork(watchGetThreads), fork(watchGetPosts)]);
}
