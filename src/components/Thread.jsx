import React from 'react';
import Post from './Post';
import NewPost from './NewPost';

const Thread = () => {
    return (
        <div>
            <Post op={true} text={'OP post'} id={1} date={new Date()} />
            <Post op={false} text={'OP post'} id={1} date={new Date()} />
            <Post op={false} text={'OP post'} id={1} date={new Date()} />
            <NewPost />
        </div>
    );
};

export default Thread;
