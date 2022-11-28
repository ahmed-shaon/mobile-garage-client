import React from 'react';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const CoustmerFeedBack = () => {
    return (
        <div className='px-4 lg:px-20 my-12'>
            <h2 className='text-3xl font-bold text-center mb-8'>User Feedback About Us</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 relative'>
                <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 shadow-xl">
                    <div className="flex justify-between p-4">
                        <h3 className='text-lg font-bold'>Samia Islam</h3>
                        <div className="flex items-center space-x-2 text-yellow-600">
                            <div className='flex'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStarHalfAlt />
                            </div>
                            <span className="text-xl font-bold">4.5</span>
                        </div>
                    </div>
                    <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                        <p>Your service quality is so much good. I love the way you take your customer. Keep it up</p>
                        <p>It is a great opportunity for those who are trouble the with their budge to a new phone. Becasue Here you can buy it cheap rate than market price.</p>
                    </div>
                </div>
                <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 shadow-xl">
                    <div className="flex justify-between p-4">
                        <h3 className='text-lg font-bold'>Tanvir Ahmed</h3>
                        <div className="flex items-center space-x-2 text-yellow-600">
                            <div className='flex'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStarHalfAlt />
                            </div>
                            <span className="text-xl font-bold">4.5</span>
                        </div>
                    </div>
                    <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                        <p>It is a great opportunity for those who are trouble the with their budge to a new phone. Becasue Here you can buy it cheap rate than market price.</p>
                        <p>Your service quality is so much good. I love the way you take your customer. Keep it up</p>
                    </div>
                </div>
                <p className='absolute text-xl left-4 top-1/2 bg-gray-300 p-2 hidden lg:flex'>❮</p>
                <p className='absolute text-xl right-4 top-1/2 bg-gray-300 p-2 hidden lg:flex'>❯</p>
            </div>
        </div>
    );
};

export default CoustmerFeedBack;