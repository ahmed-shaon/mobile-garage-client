import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import ConfirmModal from '../../Shared/ConfirmModal/ConfirmModal';
import Loading from '../../Shared/Loading/Loading';

const MyWishList = () => {
    const { user } = useContext(AuthContext);
    const [product, setProduct] = useState(null);
    const { data: wishProducts = [], isLoading, refetch } = useQuery({
        queryKey: ["wishlist"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/wishlist?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem("accessToken")}`
                }
            });
            const data = await res.json();
            return data;
        }

    })
    if (isLoading) {
        return <Loading></Loading>;
    }

    const handleDeleteWishProduct = id => {
        fetch(`http://localhost:5000/wishlist/${id}`,{
            method:'DELETE',
            headers:{
                authorization:`bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount>0){
                toast.success('Successfully deleted one item');
                setProduct(null);
                refetch();
            }
        })
    }
    return (
        <div>
            <h2 className="text-3xl font-bold text-center mt-12">My WishLisht</h2>
            <div>
                <div className="overflow-x-auto p-4 lg:p-8">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Product Image</th>
                                <th>Product Name</th>
                                <th>Product Price</th>
                                <th>Book Now</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                wishProducts.map((wishProduct, i) => <tr key={wishProduct._id}>
                                    <th>{i + 1}</th>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={wishProduct.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{wishProduct.productName}</td>
                                    <td>${wishProduct.price}</td>
                                    <td><button className='btn btn-sm btn-primary'><Link to={`/category/${wishProduct.categoryId}`}>Book Now</Link></button></td>
                                    <td><label htmlFor="confirm-modal" className="btn btn-sm btn-error" onClick={() => setProduct(wishProduct)}>delete</label> </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            {
                product && <ConfirmModal
                itemId={product._id}
                handleDeleteItem={handleDeleteWishProduct}                
                ></ConfirmModal>
            }
        </div>
    );
};

export default MyWishList;