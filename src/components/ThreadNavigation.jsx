import React from 'react';
import NavigationPanel from './NavigationPanel';

const ThreadNavigation = ({ children, postsCount, onUpdate = () => {} }) => {
    return (
        <>
            <NavigationPanel postsCount={postsCount} top />
            {children}
            <NavigationPanel postsCount={postsCount} bottom />
        </>
    );
};

export default ThreadNavigation;
