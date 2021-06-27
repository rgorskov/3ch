import React from 'react';
import { Link } from 'react-router-dom';
import s from './ThreadNavigation.module.css';

const ThreadNavigation = ({ top, bottom, postsCount }) => {
    return (
        <div className={s.controlsContainer}>
            <div className={s.controls}>
                <Link to="/">Назад</Link>
                <span className={s.divider}>|</span>

                {bottom && (
                    <>
                        <a href="#top">Наверх</a>
                        <span className={s.divider}>|</span>
                    </>
                )}

                {top && (
                    <>
                        <a href="#bottom">Вниз</a>
                        <span className={s.divider}>|</span>
                    </>
                )}

                <a href="#">Обновить</a>
            </div>
            <div>
                <span>{postsCount}</span>
            </div>
        </div>
    );
};

export default ThreadNavigation;
