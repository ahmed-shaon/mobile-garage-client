import React from 'react';
import { Link } from 'react-router-dom';

const CategoryItem = ({category}) => {
    const {name, categoryId} = category;
    return (
        <div>
            <button className='btn btn-outline text-center w-full'><Link to={`/category/${categoryId}`}>{name}</Link></button>
        </div>
    );
};

export default CategoryItem;