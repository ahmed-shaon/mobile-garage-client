import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmModal from '../../Shared/ConfirmModal/ConfirmModal';
import Loading from '../../Shared/Loading/Loading';

const AllSellers = () => {
    const [sellerId, setSellerId] = useState("");
    const [closeModal, setCloseModal] = useState(true);
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
                if (data.deletedCount > 0) {
                    toast.success('seller Deleted Successfully');
                    setCloseModal(false);
                    refetch();
                }
                // setCloseModal(true);
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
                                    <td><label htmlFor="confirm-modal" className="btn btn-sm btn-error" onClick={()=> setSellerId(seller._id)}>Delete</label>
                                    </td>
                                </tr>

                            )
                        }
                    </tbody>
                </table>
            </div>
            {
                closeModal && <ConfirmModal
                    itemId={sellerId}
                    handleDeleteItem={handleDeleteSeller}
                ></ConfirmModal>
            }
        </div>
    );
};

export default AllSellers;