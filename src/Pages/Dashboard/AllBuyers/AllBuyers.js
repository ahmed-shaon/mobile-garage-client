import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';

const AllBuyers = () => {
    const { data: buyers = [], isLoading, refetch } = useQuery({
        queryKey: ['buyer'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users/buyer', {
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

    const handleDeleteBuyers = id => {
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
                    toast.success('User Deleted Successfully');
                    refetch();
                }
            })
    }
    return (
        <div>
            <h2 className='text-3xl font-bold text-center my-8'>All Buyers</h2>
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
                            buyers.map((buyer, i) =>
                                <tr key={buyer._id}>
                                    <th>{i + 1}</th>
                                    <td>{buyer.name}</td>
                                    <td>{buyer.email}</td>
                                    <td><button onClick={() =>handleDeleteBuyers(buyer._id)} className='btn btn-sm btn-error'>Delete</button></td>
                                </tr>

                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;