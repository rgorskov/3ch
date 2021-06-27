import React from 'react';
import Post from './Post';
import NewPost from './NewPost';
import ThreadNavigation from './ThreadNavigation';

const Thread = () => {
    return (
        <div>
            <ThreadNavigation top postsCount={3} />
            <Post op={true} text={'OP post'} id={1} date={new Date()} />
            <Post op={false} text={'OP post'} id={1} date={new Date()} />
            <Post op={false} text={'OP post'} id={1} date={new Date()} />
            <ThreadNavigation bottom postsCount={3} />
            <NewPost />
        </div>
    );
};

export default Thread;
