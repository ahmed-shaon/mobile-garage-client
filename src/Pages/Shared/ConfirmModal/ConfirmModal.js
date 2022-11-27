import React from 'react';

const ConfirmModal = ({itemId, handleDeleteItem}) => {

    
    return (
        <div>
            {/* <label htmlFor="confirm-modal" className="btn">open modal</label> */}
            <input type="checkbox" id="confirm-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are you sure to delete an order item?</h3>
                    <div className="modal-action">
                        <button onClick={() => handleDeleteItem(itemId)} className='btn btn-primary'>OK</button>
                        <label htmlFor="confirm-modal" className="btn btn-accent">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmModal;