import React, { useState } from 'react';
import BlogModal from './BlogModal';

const BlogItem = ({blog}) => {
    const [isOpen, setIsOpen] = useState(true);
    const {question, answer} = blog;
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{question}</h2>
                    <p>{answer.slice(0,120)}...<label htmlFor="blog-modal" className="text-primary hover:underline">read more</label></p>
                </div>
            </div>
            {
                blog && <BlogModal
                blog={blog}
                ></BlogModal>
            }
        </div>
    );
};

export default BlogItem;