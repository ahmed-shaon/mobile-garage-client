import React from 'react';

const AdvertiseCard = ({ advertiseProduct}) => {
    const {image, modelName, price, location} = advertiseProduct;
    const {ram, storage, battery, color} = advertiseProduct.feature;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className='h-96' src={image} alt="Mobile" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {modelName}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <div className="card-actions justify-between">
                    <div className="badge badge-outline">{ram}</div>
                    <div className="badge badge-outline">{storage}</div>
                    <div className="badge badge-outline">{color}</div>
                    <div className="badge badge-outline">{battery}mAh</div>
                </div>
                <p>Price: <strong>${price}</strong></p>
                <p>Location: {location}</p>
            </div>
        </div>
    );
};

export default AdvertiseCard;