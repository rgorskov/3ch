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

const initialState = {
    loaded: false,
    isFetching: false,
    items: [],
};

export default (state = initialState, action) => {
    return state;
};
