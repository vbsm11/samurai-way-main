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
            <img src="https://img.championat.com/s/735x490/news/big/r/t/gilermo-abaskal-vozglavil-spartak_16548517192029530367.jpg" alt="avatar"/>
            {props.message}
            <div>
                {props.likesCount}
                <span> likes</span>
            </div>
        </div>
    );
}