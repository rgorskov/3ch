import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createSelector } from 'reselect';
import { getThreads } from '../data/actions';
import Post from './Post';
import s from './ThreadsList.module.css';

const ThreadsList = () => {
    const dispatch = useDispatch();
    const threadsSelector = createSelector(
        (state) => state.threads,
        (threads) =>
            threads.map((t) => {
                const threadId = t.id;
                const opPost = t.posts.find((p) => p.op);
                const createTime = new Date(opPost.createTime);
                return {
                    ...opPost,
                    createTime,
                    threadId,
                };
            })
    );
    const opPosts = useSelector(threadsSelector);
    const isLoaded = useSelector((state) => state.loaded);

    if (!isLoaded) {
        dispatch(getThreads());

        return <div>Place loader here</div>;
    }

    return (
        <div>
            <Link to="/thread/create">Создать тред</Link>

            {opPosts.map((p) => {
                return (
                    <div className={s.thread} key={p.id}>
                        <Post
                            op={true}
                            text={p.text}
                            id={p.id}
                            date={p.createTime}
                            showLink
                            threadId={p.threadId}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default ThreadsList;
