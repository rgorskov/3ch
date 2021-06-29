export const threadActions = {
    GET_THREADS: 'threads/get_all',
    GET_THREADS_SUCCESS: 'threads/get_all_success',
    GET_POSTS: 'threads/get_posts',
    GET_POSTS_SUCCESS: 'threads/get_posts_success',
    SEND_POST: 'threads/send_post',
    SEND_POST_SUCCESS: 'threads/send_post_success',
    SEND_THREAD: 'threads/send_thread',
    SEND_THREAD_SUCCESS: 'threads/send_thread',
    SET_FETCHING: 'threads/set_fetching',
    SET_LOADED: 'threads/set_loaded',
    SET_POSTS_FETCHING: 'threads/set_posts_fetching',
    SET_POSTS_LOADED: 'threads/set_posts_loaded',
};

export const getThreads = () => ({ type: threadActions.GET_THREADS });

export const getThreadsSuccess = (threads) => {
    return {
        type: threadActions.GET_THREADS_SUCCESS,
        payload: threads,
    };
};

export const setThreadsFetching = (isFetching) => {
    return {
        type: threadActions.SET_FETCHING,
        payload: isFetching,
    };
};

export const setThreadsLoaded = () => {
    return {
        type: threadActions.SET_LOADED,
    };
};
