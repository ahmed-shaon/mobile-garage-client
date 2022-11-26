import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';

const AllSellers = () => {

    const { data: sellers = [], isLoading, refetch } = useQuery({
        queryKey: ['seller'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users/seller', {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }
    const handleDeleteSeller = id => {
        fetch(`http://localhost:5000/users?id=${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    toast.success('seller Deleted Successfully');
                    refetch();
                }
            })
    }
    return (
        <div>
            <h2 className='text-3xl font-bold text-center my-8'>All Sellers</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers.map((seller, i) =>
                                <tr key={seller._id}>
                                    <th>{i + 1}</th>
                                    <td>{seller.name}</td>
                                    <td>{seller.email}</td>
                                    <td><button onClick={() => handleDeleteSeller(seller._id)} className='btn btn-sm btn-error'>Delete</button></td>
                                </tr>

                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;