import React from 'react';
import img1 from '../../../assets/images/img-1.jpg';
import img2 from '../../../assets/images/img-2.jpg';
import img3 from '../../../assets/images/img-3.png';
import img4 from '../../../assets/images/img-4.jpg';
import BannerItem from './BannerItem';


const carousel = [
    {
        id:1,
        img:img1,
        title:"Get your happiness with us. Get your gadget in your budget",
        description:"Our demand is your happiness. Get your desire in your range of effort. Take your gadget from us.",
        pre:4,
        next:2
    },
    {
        id:2,
        img:img2,
        title:"Get your happiness with us. Get your gadget in your budget",
        description:"Our demand is your happiness. Get your desire in your range of effort. Take your gadget from us.",
        pre:1,
        next:3
    },
    {
        id:3,
        img:img3,
        title:"Get your happiness with us. Get your gadget in your budget",
        description:"Our demand is your happiness. Get your desire in your range of effort. Take your gadget from us.",
        pre:2,
        next:4
    },
    {
        id:4,
        img:img4,
        title:"Get your happiness with us. Get your gadget in your budget",
        description:"Our demand is your happiness. Get your desire in your range of effort. Take your gadget from us.",
        pre:3,
        next:1
    },
    
]
const Banner = () => {
    return (
        <div className="carousel w-full relative">
            {
                carousel.map(item => <BannerItem
                key={item.id}
                item={item}
                ></BannerItem>)
            }
        </div>
    );
};

export default Banner;