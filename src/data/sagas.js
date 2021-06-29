import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { getAllThreads } from '../api';
import {
    getThreads,
    getThreadsSuccess,
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

export default function* rootSaga() {
    yield all([fork(watchGetThreads)]);
}
