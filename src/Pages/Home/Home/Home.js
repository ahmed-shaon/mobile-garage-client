import React from 'react';
import Advertise from '../Advertise/Advertise';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import CoustmerFeedBack from '../FeedBack/CoustmerFeedBack';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Advertise></Advertise>
            <CoustmerFeedBack></CoustmerFeedBack>
        </div>
    );
};

export default Home;