import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const BookingModal = ({ product, setOpenModal, user, setBook }) => {
    
    const { _id, modelName, originalPrice,image } = product;
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleBookOrder = data => {
        console.log(data)
        const order = {
            userName: data.name,
            productName: data.modelName,
            price:data.price,
            email: user?.email,
            location: data.location,
            number: data.number,
            productId: _id,
            image
        }
        console.log(order);
        axios.post("https://mobile-garage-server.vercel.app/order",order,{
            headers:{
                authorization:`bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => {
            console.log(res);
            if(res.data.acknowledged){
                toast.success('Your Booking is confirmed.');
                setOpenModal(false)
            }
            else{
                toast.error('Already Booked');
                setOpenModal(false);
            }
        })
        .catch(err => console.log(err))
    }
    return (
        <div>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(handleBookOrder)}>
                        <div>
                            <h2 className='text-xl font-bold text-center'>Book for {modelName}</h2>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input {...register("name")} defaultValue={user?.displayName} type="text" name="name" placeholder="Your Name" className="input input-bordered w-full" readOnly />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email")} defaultValue={user?.email} type="text" name="email" placeholder="Your Name" className="input input-bordered w-full" readOnly />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Model Name</span>
                            </label>
                            <input {...register("modelName")} defaultValue={modelName} type="text" name="modelName" placeholder="Your Name" className="input input-bordered w-full " readOnly />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input {...register("price")} defaultValue={originalPrice} type="text" name="price" placeholder="Your Name" className="input input-bordered w-full " readOnly />
                        </div>
                        <div className="form-control w-full  relative">
                            <label className="label">
                                <span className="label-text">Location</span>
                                {errors.location && <p role="alert" className="absolute top-2 right-0 text-red-400 text-xs">{errors.location?.message}</p>}
                            </label>
                            <input {...register("location", { required: 'Field Required' })} type="text" name="location" placeholder="Meeting Location" className="input input-bordered w-full " />
                        </div>
                        <div className="form-control w-full relative">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                                {errors.number && <p role="alert" className="absolute top-2 right-0 text-red-400 text-xs">{errors.number?.message}</p>}
                            </label>
                            <input {...register("number", { required: 'Field Required' })} type="text" name="number" placeholder="Your Nubmer" className="input input-bordered w-full " />
                        </div>
                        <div className='my-4 flex justify-center'>
                            <input type="submit" className='btn btn-primary mr-2 disabled' value="Order" />
                            <label htmlFor="my-modal" className="btn btn-error">Cancle</label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;