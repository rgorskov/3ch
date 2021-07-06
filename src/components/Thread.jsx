import React, { useEffect } from 'react';
import Post from './Post';
import NewPost from './NewPost';
import ThreadNavigation from './ThreadNavigation';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../data/actions';

const Thread = () => {
    const { threadId } = useParams();
    const dispatch = useDispatch();
    const thread = useSelector((state) => {
        return state.threads.find((t) => t.id == threadId);
    });
    const posts = [...thread.posts];

    const updateThread = () => {
        dispatch(getPosts(threadId));
    };

    if (!thread) {
        return <div>Тред не найден</div>;
    }

    useEffect(() => {
        if (!thread.postsLoaded) {
            dispatch(getPosts(threadId));
        }
    }, []);

    useEffect(() => {
        posts.sort((a, b) => {
            const d1 = new Date(a.createTime),
                d2 = new Date(b.createTime);
            return d2 - d1;
        });
    }, [posts]);

    return (
        <div>
            <ThreadNavigation postsCount={posts.length} onUpdate={updateThread}>
                {posts.map((p) => {
                    return (
                        <Post date={new Date(p.createTime)} {...p} key={p.id} />
                    );
                })}
            </ThreadNavigation>
            <NewPost />
        </div>
    );
};

export default Thread;
