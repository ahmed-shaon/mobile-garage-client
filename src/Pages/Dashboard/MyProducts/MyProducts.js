import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const MyProducts = () => {
    const {user} = useContext(AuthContext);

    const {data: products = [], isLoading, refetch} = useQuery({
        queryKey:[],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/products?email=${user?.email}`, {
                headers:{
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json();
            return data;
        }
    })
    if(isLoading){
        return <Loading></Loading>
    }

    const handleProductDelete = id => {
        fetch(`http://localhost:5000/products?id=${id}`,{
            method:'DELETE',
            headers:{
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount>0){
                toast.success('Deleted Product Successfully.');
                refetch();
            }
        })

    }
    return (
        <div>
            <h2 className="text-3xl font-bold text-center mt-8">My products</h2>
            <div className="overflow-x-auto p-8">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Avertise</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, i)=> <tr key={product._id}>
                                <th>{i+1}</th>
                                <td>{product.modelName}</td>
                                <td>{product.resellPrice}</td>
                                <td>{product.status === 'sold' ? <span>Sold</span>: <span className='text-primary'>Available</span>}</td>
                                <td>{product.status !== 'sold' && <button className='btn btn-sm btn-secondary text-white'>adertise</button>}</td>
                                <td><button onClick={() => handleProductDelete(product._id)} className='btn btn-sm btn-error'>Delete</button></td>
                            </tr>)
                        }                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;