import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import ConfirmModal from '../../Shared/ConfirmModal/ConfirmModal';
import Loading from '../../Shared/Loading/Loading';

const MyOrders = () => {
    const [closeModal, setCloseModal] = useState(true);
    const [orderId, setOrderId] = useState("");
    const { user } = useContext(AuthContext);
    const { data: orders = [], isLoading, refetch } = useQuery({
        queryKey: ['order', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/order?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        <Loading></Loading>
    }


    return (
        <div>
            <h2 className="text-3xl font-bold text-center mt-8">My Orders</h2>
            <div className="overflow-x-auto p-8">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Produc tName</th>
                            <th>Price</th>
                            <th>Meet Point</th>
                            <th>Number</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, i) =>
                                <tr key={order._id}>
                                    <th>{i + 1}</th>
                                    <td>{order.productName}</td>
                                    <td>{order.price}</td>
                                    <td>{order.location}</td>
                                    <td>{order.number}</td>
                                    <td><label htmlFor="confirm-modal" className="btn btn-sm btn-error" onClick={() => setOrderId(order._id)}>Delete</label>
                                    </td>
                                </tr>

                            )
                        }
                    </tbody>
                </table>
            </div>
            {
                closeModal && <ConfirmModal
                itemId = {orderId}
                setCloseModal={setCloseModal}
                refetch={refetch}
                ></ConfirmModal>
            }
        </div>
    );
};

export default MyOrders;