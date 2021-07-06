import React from 'react';
import NavigationPanel from './NavigationPanel';

const ThreadNavigation = ({ children, postsCount, onUpdate }) => {
    return (
        <>
            <NavigationPanel postsCount={postsCount} onUpdate={onUpdate} top />
            {children}
            <NavigationPanel
                postsCount={postsCount}
                onUpdate={onUpdate}
                bottom
            />
        </>
    );
};

export default ThreadNavigation;
