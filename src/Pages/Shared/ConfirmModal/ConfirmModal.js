import React from 'react';
import toast from 'react-hot-toast';

const ConfirmModal = ({itemId, handleDeleteItem}) => {

    
    return (
        <div>
            {/* The button to open modal */}
            {/* <label htmlFor="confirm-modal" className="btn">open modal</label> */}

            {/* Put this part before </body> tag */}
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