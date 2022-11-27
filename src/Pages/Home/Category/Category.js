import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CategoryItem from './CategoryItem';

const Category = () => {
    const {data: categories = [], isLoading} = useQuery({
        queryKey:[],
        queryFn:async() => {
            const res = await fetch('http://localhost:5000/category');
            const data = await res.json();
            return data;
        }
    })
    return (
        <div className='my-12 lg:px-20'>
            <h2 className='text-2xl font-bold text-center my-8'>Categories</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                {
                    categories.map(category => <CategoryItem
                    key={category._id}
                    category={category}
                    ></CategoryItem>)
                }
            </div>
        </div>
    );
};

export default Category;