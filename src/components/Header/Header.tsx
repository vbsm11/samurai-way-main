import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img
                src="https://avatars.mds.yandex.net/i?id=b462fe80092ada87ba33307cdf12bf62-4472919-images-thumbs&n=13"
                alt="logo"/>
        </header>
    );
}

export default Header;