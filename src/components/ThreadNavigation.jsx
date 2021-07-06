import React, { useEffect, useState } from 'react';
import NavigationPanel from './NavigationPanel';

const ThreadNavigation = ({ children, postsCount, onUpdate }) => {
    const [disabled, setDisabled] = useState(false);

    const onUpdateHandler = () => {
        if (disabled) return;

        onUpdate();
        setDisabled(true);
    };

    useEffect(() => {
        if (disabled) {
            setTimeout(() => {
                setDisabled(false);
            }, 10000);
        }
    }, [disabled]);

    return (
        <>
            <NavigationPanel
                postsCount={postsCount}
                onUpdate={onUpdateHandler}
                top
                disableUpdate={disabled}
            />
            {children}
            <NavigationPanel
                postsCount={postsCount}
                onUpdate={onUpdateHandler}
                bottom
                disableUpdate={disabled}
            />
        </>
    );
};

export default ThreadNavigation;
