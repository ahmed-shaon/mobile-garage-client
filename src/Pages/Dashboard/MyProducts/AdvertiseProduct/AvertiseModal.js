import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';

const AvertiseModal = ({product, setProduct}) => {
    const {_id, modelName, image,  resellPrice, location, timeUsed,email, categoryId } = product;
    const handleAdvertiseProduct = () => {
        const advertiseProduct = {
            modelName,
            image,
            price:resellPrice,
            feature:product.specificatons,
            advertiseId:_id,
            location,
            timeUsed,
            email,
            categoryId
        }
        console.log(advertiseProduct);
        axios.post(`http://localhost:5000/advertise?id=${_id}`,advertiseProduct,{
            headers:{
                authorization:`bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => {
            console.log(res.data);
            if(res.data.acknowledged){
                setProduct(null);
                toast.success("Your request for advertising is successfull");
            }
            else{
                toast.error(res.data.message);
                setProduct(null);
            }
        })

    }
    return (
        <div>
            <input type="checkbox" id="avertise-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Do you want to advertise your product!!?</h3>
                    <p className="py-4">If you are agree then click ok to procced otherwise click cancle!!</p>
                    <div className="modal-action">
                        <button className='btn btn-primary' onClick={handleAdvertiseProduct}>Ok</button>
                        <label htmlFor="avertise-modal" className="btn btn-accent">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AvertiseModal;