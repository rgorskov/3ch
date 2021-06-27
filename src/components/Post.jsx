import React from 'react';
import s from './Post.module.css';
import { Link } from 'react-router-dom';

const Post = ({ op, date, text, id, threadId, showLink }) => {
    return (
        <div className={s.wrapper}>
            <div className={op ? s.op : s.reply}>
                <div className={s.info}>
                    {date.toString()}
                    {showLink && <Link to={'/thread/' + threadId}>В тред</Link>}
                </div>
                <div className={s.text}>{text}</div>
            </div>
        </div>
    );
};

export default Post;
