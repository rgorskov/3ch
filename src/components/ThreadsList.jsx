import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getThreads } from '../data/actions';
import Post from './Post';
import s from './ThreadsList.module.css';

const ThreadsList = () => {
    const isLoaded = useSelector((state) => state.loaded);
    const dispatch = useDispatch();
    if (!isLoaded) {
        dispatch(getThreads());
    }

    return (
        <div>
            <Link to="/thread/create">Создать тред</Link>
            <div className={s.thread}>
                <Post
                    op={true}
                    text={'OP post'}
                    id={1}
                    date={new Date()}
                    showLink
                    threadId={1}
                />
            </div>
            <div className={s.thread}>
                <Post
                    op={true}
                    text={'OP post'}
                    id={1}
                    date={new Date()}
                    showLink
                    threadId={1}
                />
            </div>
            <div className={s.thread}>
                <Post
                    op={true}
                    text={'OP post'}
                    id={1}
                    date={new Date()}
                    showLink
                    threadId={1}
                />
            </div>
        </div>
    );
};

export default ThreadsList;
