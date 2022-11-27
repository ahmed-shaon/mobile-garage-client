import React from 'react';

const AvertiseModal = ({product, setProduct}) => {

    const handleAdvertiseProduct = () => {

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