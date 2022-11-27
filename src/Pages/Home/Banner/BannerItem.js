import React from 'react';

const BannerItem = ({item}) => {
    const {id,img, title, description, pre, next} = item;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <img className='bg-gradient-to-r from-cyan-500 to-blue-500' src={img} alt="" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#slide${pre}`} className="btn btn-circle">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
            <div className='absolute lg:top-1/4  lg:left-1/4 lg:right-1/4 text-white'>
                <h2 className=' text-2xl lg:text-6xl font-bold'>{title}</h2>
                <p className='my-4'>{description}</p>
            </div>
        </div>
    );
};

export default BannerItem;