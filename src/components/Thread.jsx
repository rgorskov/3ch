import React, { useEffect } from 'react';
import Post from './Post';
import NewPost from './NewPost';
import ThreadNavigation from './ThreadNavigation';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts, sendPost } from '../data/actions';

const Thread = () => {
    const { threadId } = useParams();
    const dispatch = useDispatch();
    const thread = useSelector((state) => {
        return state.threads.find((t) => t.id == threadId);
    });
    const posts = [...thread.posts].sort((a, b) => {
        //debugger;
        const d1 = new Date(a.createTime),
            d2 = new Date(b.createTime);
        return d1 - d2;
    });

    const updateThread = () => {
        dispatch(getPosts(threadId));
    };

    const addPost = (post) => {
        const newPost = { ...post, op: false };
        dispatch(sendPost(threadId, newPost));
    };

    if (!thread) {
        return <div>Тред не найден</div>;
    }

    useEffect(() => {
        if (!thread.postsLoaded) {
            dispatch(getPosts(threadId));
        }
    }, []);

    // useEffect(() => {
    //     posts
    // }, [posts]);

    return (
        <div>
            <ThreadNavigation postsCount={posts.length} onUpdate={updateThread}>
                {posts.map((p) => {
                    return (
                        <Post date={new Date(p.createTime)} {...p} key={p.id} />
                    );
                })}
            </ThreadNavigation>
            <NewPost onAddPost={addPost} />
        </div>
    );
};

export default Thread;
