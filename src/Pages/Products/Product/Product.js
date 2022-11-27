import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import BookingModal from '../BookingModal/BookingModal';

const Product = ({ product }) => {
    const {user} = useContext(AuthContext);
    const [openModal, setOpenModal] = useState(true);
    const { modelName, image, originalPrice, resellPrice, location, description, timeOfPost, sellerName, timeUsed } = product;
    const {ram, storage, color, battery} = product.specificatons;
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img className='w-full h-96' src={image} alt="mobile" /></figure>
                <div className="card-body text-lg">
                    <h2 className="card-title">{modelName}</h2>
                    <p>{description}</p>
                    <div className='grid grid-cols-2 lg:grid-cols-4'>
                        <p>RAM: <span className='font-bold'>{ram}</span></p>
                        <p>Storage: <span className='font-bold'>{storage}</span></p>
                        <p>Color: <span className='font-bold'>{color}</span></p>
                        <p>Battery: <span className='font-bold'>{battery}mAh</span></p>
                    </div>
                    <p>Resale Price: <span className='font-bold'>${resellPrice}</span></p>
                    <p>Original Price: <span className='font-bold'>${originalPrice}</span></p>
                    <p>Location: <span className='font-bold'>{location}</span></p>
                    <p>Time Used: <span className='font-bold'>{timeUsed} months</span></p>
                    <p>Seller Name: <span className='font-bold'>{sellerName}</span></p>
                    <p>Posted Time: <span className='font-bold'>{timeOfPost}</span></p>
                    <div className="card-actions justify-end">
                        <label htmlFor="my-modal" className="btn btn-primary">Book Now</label>
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