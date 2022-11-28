import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import BookingModal from '../BookingModal/BookingModal';
import heart from '../../../assets/icons/heart.png';
import verifyIcon from '../../../assets/icons/verify.png';
import axios from 'axios';
import toast from 'react-hot-toast';

const Product = ({ product }) => {
    const { user } = useContext(AuthContext);
    const [openModal, setOpenModal] = useState(true);
    const { _id, modelName, image, originalPrice, resellPrice, location, description, timeOfPost, sellerName, timeUsed, categoryId, userStatus, status } = product;
    const { ram, storage, color, battery } = product.specificatons;
    const handleWishList = () => {
        const wishProduct = {
            productId: _id,
            productName: modelName,
            image,
            price: resellPrice,
            email: user?.email,
            categoryId
        }
        axios.post(`http://localhost:5000/wishlist`, wishProduct, {
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.data.acknowledged) {
                    toast.success('Added to wish list!!');
                }
                else {
                    toast.error(res.data.message);
                }
            })
    }
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl text-xs">
                <figure><img className='w-full h-96' src={image} alt="mobile" /></figure>
                <div className="card-body text-lg">
                    <h2 className="card-title">{modelName}</h2>
                    <p>{description}</p>
                    <div className='grid grid-cols-2 lg:grid-cols-2'>
                        <p>RAM: <span className='font-bold'>{ram}</span></p>
                        <p>Storage: <span className='font-bold'>{storage}</span></p>
                        <p>Color: <span className='font-bold'>{color}</span></p>
                        <p>Battery: <span className='font-bold'>{battery}mAh</span></p>
                    </div>
                    <p>Resale Price: <span className='font-bold'>${resellPrice}</span></p>
                    <p>Original Price: <span className='font-bold'>${originalPrice}</span></p>
                    <p>Location: <span className='font-bold'>{location}</span></p>
                    <p>Time Used: <span className='font-bold'>{timeUsed} months</span></p>
                    <p className='flex item-center'>Seller Name: <span className='font-bold'>
                        {sellerName}
                    </span>
                        {userStatus === 'verified' && <img className='w-4 h-4' src={verifyIcon} alt="icon" />}
                    </p>
                    <p>Posted Time: <span className='font-bold'>{timeOfPost}</span></p>
                    <p>Status: {status === 'sold' ? <span className='text-red-400'>Sold</span>
                    :<sapn className="text-secondary">Unsold</sapn>}</p>
                    <div className="card-actions justify-between items-center">
                        <div className='flex items-center text-[16px] hover:underline hover:bg-gray-300 p-1'>
                            <img className='w-8 h-8' src={heart} alt="" />
                            <button onClick={handleWishList}>Add to Wish List</button>
                        </div>
                        <label htmlFor="my-modal" className="btn btn-primary" disabled={status === 'sold'} onClick={() => setOpenModal(true)}>Book Now</label>
                    </div>
                    {
                        openModal && <BookingModal
                            product={product}
                            setOpenModal={setOpenModal}
                            user={user}
                        ></BookingModal>
                    }
                </div>
            </div>
        </div>
    );
};

export default Product;