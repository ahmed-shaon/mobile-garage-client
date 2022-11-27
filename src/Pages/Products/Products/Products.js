import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';

const Products = () => {
    const products = useLoaderData();
    return (
        <div className='my-8 lg:my-12 px-4 lg:px-20'>
            {
                products.length > 0 ? <>
                    <h2 className='text-3xl font-bold text-center mb-8'>Products of Apple</h2>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        {
                            products.map(product => <Product
                                key={product._id}
                                product={product}
                            ></Product>)
                        }
                    </div>
                </>
                    : <div className='h-[700px]'>
                        <p className='text-2xl'>There is no products in the category <Link className='text-primary hover:text-secondary' to="/">go back home</Link></p>
                    </div>
            }
        </div>
    );
};

export default Products;