import React, { FC } from 'react';
import "../styles/components/Card.scss";
import { Rate } from 'antd';

type Props = {
    title: string,
    text: string,
    url: string,
    duration: string,
    rating: string,
    image: string
}

const Card: FC<Props> = ({
    title,
    text,
    image,
    url,
    duration,
    rating
}) => {
    return (
        <div className="my-card">
            <div className="my-card__img">
                <a href={url}><img src={image} alt="" /></a>
            </div>
            <div className="my-card__body">
                <h4><a href={url} className="my-card__title">{title}</a></h4>
                <p className="my-card__text">
                    {text}
                </p>
                <div className="rating">
                    <span className="rating__value">{rating}</span>
                    <div className="rating__stars">
                        <Rate allowHalf defaultValue={2.5} />
                    </div>
                </div>
                <div className="duration">
                    Длительность: {duration} часа(ов)
                </div>
            </div>
        </div>
    )
};

export default Card;