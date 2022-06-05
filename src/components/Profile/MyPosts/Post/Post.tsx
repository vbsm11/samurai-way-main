import React from 'react';
import s from './Post.module.css';

type PostPropsType = {
    id: number
    message: string;
    likesCount: number;
}

export const Post:React.FC<PostPropsType> = (props) => {
    return (
        <div className={s.item}>
            <img src="https://cdn-st1.rtr-vesti.ru/vh/pictures/xw/294/966/8.jpg" alt="avatar"/>
            {props.message}
            <div>
                {props.likesCount}
                <span> likes</span>
            </div>
        </div>
    );
}