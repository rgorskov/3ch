import React from 'react';
import Post from './Post';
import s from './ThreadsList.module.css';

const ThreadsList = () => {
    return (
        <div>
            <div className={s.thread}>
                <Post op={true} text={'OP post'} id={1} date={new Date()} />
            </div>
            <div className={s.thread}>
                <Post op={true} text={'OP post'} id={1} date={new Date()} />
            </div>
            <div className={s.thread}>
                <Post op={true} text={'OP post'} id={1} date={new Date()} />
            </div>
        </div>
    );
};

export default ThreadsList;
