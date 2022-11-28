import React from 'react';
import './BannerItem.css';

const BannerItem = ({item}) => {
    const {id,img, title, description, pre, next} = item;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='img-carosuel'>
                <img src={img} alt="" className="w-full rounded-xl" />
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${pre}`} className="btn btn-circle ">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle ">❯</a>
            </div>
            <div className='absolute w-8/12 top-1/5 p-8 lg:bottom-48 lg:left-24 text-white'>
                <h2 className=' text-2xl lg:text-6xl font-bold'>{title}</h2>
                <p className='my-4'>{description}</p>
            </div>
        </div>
    );
};

export default BannerItem;