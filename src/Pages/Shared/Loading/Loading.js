import React from 'react';

const Loading = () => {
    return (
        <div className='flex justify-center my-12'>
            <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
        </div>
    );
};

export default Loading;