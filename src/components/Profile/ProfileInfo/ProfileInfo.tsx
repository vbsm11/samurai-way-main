import React from 'react';
import s from './ProfileInfo.module.css';


export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://img.gazeta.ru/files3/784/11323784/RIAN_3253949.HR.ru-pic905-895x505-32974.jpg"/>
            </div>
            <div className={s.descriptionBlock}>
                ava + desription
            </div>
        </div>
    );
}
