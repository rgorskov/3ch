/*
{
    loaded: bool,
    isFetching: bool,
    threads: [
        {
            id: string,
            postsLoaded: bool,
            isFetching: bool,
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
                    isFetching: false,
                    posts: [t.post],
                };
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
