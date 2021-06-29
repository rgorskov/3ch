export const threadActions = {
    GET_THREADS: 'threads/get_all',
    GET_THREADS_SUCCESS: 'threads/get_all_success',
    GET_POSTS: 'threads/get_posts',
    GET_POSTS_SUCCESS: 'threads/get_posts_success',
    SEND_POST: 'threads/send_post',
    SEND_POST_SUCCESS: 'threads/send_post_success',
    SEND_THREAD: 'threads/send_thread',
    SEND_THREAD_SUCCESS: 'threads/send_thread',
};

export const getThreadsSuccess = (threads) => {
    return {
        type: threadActions.GET_THREADS_SUCCESS,
        payload: threads,
    };
};
