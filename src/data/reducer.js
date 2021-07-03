/*
{
    loaded: bool,
    isFetching: bool,
    threads: [
        {
            id: string,
            postsLoaded: bool,
            postsFetching: bool,
            posts: [
                {
                    id: string,
                    date,
                    text
                }
            ]
        }
    ]
}
*/

import { threadActions } from './actions';

const initialState = {
    loaded: false,
    isFetching: false,
    threads: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case threadActions.SET_LOADED:
            return {
                ...state,
                loaded: true,
            };
        case threadActions.SET_FETCHING:
            return {
                ...state,
                isFetching: action.payload,
            };
        case threadActions.GET_THREADS_SUCCESS: {
            const threads = action.payload.map((t) => {
                return {
                    id: t.threadId,
                    postsLoaded: false,
                    postsFetching: false,
                    posts: [t.post],
                };
            });

            return {
                ...state,
                threads,
            };
        }
        case threadActions.SET_POSTS_LOADED: {
            const threads = state.threads.map((t) => {
                if (t.id == action.payload) {
                    return {
                        ...t,
                        postsLoaded: true,
                    };
                }
                return t;
            });

            return {
                ...state,
                threads,
            };
        }
        case threadActions.SET_POSTS_FETCHING: {
            const threads = state.threads.map((t) => {
                if (t.id == action.payload.threadId) {
                    return {
                        ...t,
                        postsFetching: action.payload.isFetching,
                    };
                }
                return t;
            });

            return {
                ...state,
                threads,
            };
        }
        case threadActions.GET_POSTS_SUCCESS: {
            const threads = state.threads.map((t) => {
                if (t.id == action.payload.threadId) {
                    return {
                        ...t,
                        posts: action.payload.posts,
                    };
                }
                return t;
            });

            return {
                ...state,
                threads,
            };
        }
        default:
            return state;
    }
};
