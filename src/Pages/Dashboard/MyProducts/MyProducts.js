import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import ConfirmModal from '../../Shared/ConfirmModal/ConfirmModal';
import Loading from '../../Shared/Loading/Loading';
import AvertiseModal from './AdvertiseProduct/AvertiseModal';

const MyProducts = () => {
    const [productId, setProductId] = useState("");
    const [product, setProduct] = useState(null);
    const [closeModal, setCloseModal] = useState(true);
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
                setCloseModal(false);
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
                                <td>{product.status !== 'sold' && <label htmlFor="avertise-modal" className="btn btn-sm btn-secondary text-white" onClick={() => setProduct(product)}>adertise</label>}</td>
                                <td><label htmlFor="confirm-modal" className="btn btn-sm btn-error" onClick={() => {
                                    setProductId(product._id)
                                    setCloseModal(true)
                                }}>Delete</label></td>
                            </tr>)
                        }                        
                    </tbody>
                </table>
            </div>
            {
                closeModal && <ConfirmModal
                itemId={productId}
                handleDeleteItem={handleProductDelete}
                ></ConfirmModal>
            }
            {
                product && <AvertiseModal
                product={product}
                setProduct={setProduct}
                ></AvertiseModal>
            }
        </div>
    );
};

export default MyProducts;