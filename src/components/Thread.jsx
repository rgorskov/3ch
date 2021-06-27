import React from 'react';
import Post from './Post';

const Thread = () => {
    return (
        <div>
            <Post op={true} text={'OP post'} id={1} date={new Date()} />
            <Post op={false} text={'OP post'} id={1} date={new Date()} />
            <Post op={false} text={'OP post'} id={1} date={new Date()} />
        </div>
    );
};

export default Thread;
