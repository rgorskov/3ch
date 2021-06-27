import React from 'react';
import { Link } from 'react-router-dom';
import Post from './Post';
import s from './ThreadsList.module.css';

const ThreadsList = () => {
    return (
        <div>
            <Link to="/thread/create">Создать тред</Link>
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
