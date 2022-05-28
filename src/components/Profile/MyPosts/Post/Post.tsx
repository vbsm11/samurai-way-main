import React from 'react';
import s from './Post.module.css';

type PostPropsType = {
    message: string;
    likesCount: number;
}

const Post:React.FC<PostPropsType> = (props) => {
    return (
        <div className={s.item}>
            <img src="https://www.millionpodarkov.ru/incoming_img/fotolight-promo.ru/7988050.jpg" alt="avatar"/>
            {props.message}
            <div>
                {props.likesCount}
                <span> likes</span>
            </div>
        </div>
    );
}

export default Post;