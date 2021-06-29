import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { getAllThreads } from '../api';
import { getThreadsSuccess, threadActions } from './actions';

function* getThreadsWorker() {
    const threads = yield call(getAllThreads);

    yield put(getThreadsSuccess(threads));
}

function* watchGetThreads() {
    yield takeEvery(threadActions.GET_THREADS, getThreadsWorker);
}

export default function* rootSaga() {
    yield all([fork(watchGetThreads)]);
}
