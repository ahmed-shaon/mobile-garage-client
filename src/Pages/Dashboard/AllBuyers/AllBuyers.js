import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmModal from '../../Shared/ConfirmModal/ConfirmModal';
import Loading from '../../Shared/Loading/Loading';

const AllBuyers = () => {
    const [buyerId, setBuyerId] = useState("");
    const [closeModal, setCloseModal] = useState(true);
    const { data: buyers = [], isLoading, refetch } = useQuery({
        queryKey: ['buyer'],
        queryFn: async () => {
            const res = await fetch('https://mobile-garage-server.vercel.app/users/buyer', {
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
        fetch(`https://mobile-garage-server.vercel.app/users?id=${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('User Deleted Successfully');
                    setCloseModal(false);
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
                                    <td><label htmlFor="confirm-modal" className="btn btn-sm btn-error" onClick={() => setBuyerId(buyer._id)}>Delete</label>
                                    </td>
                                </tr>

                            )
                        }
                    </tbody>
                </table>
            </div>
            {
                closeModal && <ConfirmModal
                    itemId={buyerId}
                    handleDeleteItem={handleDeleteBuyers}
                ></ConfirmModal>
            }
        </div>
    );
};

export default AllBuyers;