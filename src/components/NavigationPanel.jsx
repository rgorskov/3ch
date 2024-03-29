import React from 'react';
import { Link } from 'react-router-dom';
import s from './NavigationPanel.module.css';

const NavigationPanel = ({
    top,
    bottom,
    postsCount,
    onUpdate,
    disableUpdate,
}) => {
    const onUpdateButtonClick = (e) => {
        e.preventDefault();
        onUpdate();
    };
    console.log(disableUpdate);
    return (
        <div className={s.controlsContainer}>
            <div className={s.controls}>
                <Link to="/">Назад</Link>
                <span className={s.divider}></span>

                {bottom && (
                    <>
                        <a href="#top">Наверх</a>
                        <span className={s.divider}></span>
                    </>
                )}

                {top && (
                    <>
                        <a href="#bottom">Вниз</a>
                        <span className={s.divider}></span>
                    </>
                )}

                <a
                    href="#"
                    onClick={onUpdateButtonClick}
                    disabled={disableUpdate}
                >
                    Обновить
                </a>
            </div>
            <div>
                <span>{postsCount}</span>
            </div>
        </div>
    );
};

export default NavigationPanel;
