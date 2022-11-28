import React from 'react';

const BlogModal = ({blog}) => {
    return (
        <div>
            <input type="checkbox" id="blog-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="blog-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{blog.question}</h3>
                    <p className="py-4">{blog.answer}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogModal;