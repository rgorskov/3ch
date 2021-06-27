import React from 'react';
import s from './Post.module.css';

const Post = ({ op, date, text, id }) => {
    return (
        <div className={s.wrapper}>
            <div className={op ? s.op : s.reply}>
                <div className={s.info}>{date.toString()}</div>
                <div className={s.text}>{text}</div>
            </div>
        </div>
    );
};

export default Post;
