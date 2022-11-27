import React from 'react';
import { Link } from 'react-router-dom';

const CategoryItem = ({category}) => {
    const {name, categoryId} = category;
    return (
        <div>
            <Link className='btn btn-outline text-center w-full' to={`/category/${categoryId}`}>{name}</Link>
        </div>
    );
};

export default CategoryItem;