import React, { useState } from 'react';

const NewPost = ({ onAddPost }) => {
    const [message, setMessage] = useState('');

    const onInputMessage = (e) => {
        setMessage(e.target.value);
    };

    const onSendButtonClick = () => {
        const post = {
            text: message,
        };
        onAddPost(post);
        setMessage('');
    };

    return (
        <div>
            <textarea onChange={onInputMessage} value={message}></textarea>
            <button onClick={onSendButtonClick}>Отправить</button>
        </div>
    );
};

export default NewPost;
