import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { format } from 'date-fns';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useContext(AuthContext);
    const imageHostKey = process.env.REACT_APP_hostApiKey;

    const handleAddProduct = data => {
        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image);
        fetch(`https://api.imgbb.com/1/upload?key=${imageHostKey}`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                const date = format(new Date(), 'PP');
                if (imgData.success) {
                    const product = {
                        categoryId: data.categoryId,
                        modeName: data.modelName,
                        resellPrice: data.resellPrice,
                        originalPrice: data.originalPrice,
                        timeUsed: data.timeUsed,
                        condition: data.condition,
                        sellerName: data.name,
                        sellerNumber: data.number,
                        location: data.location,
                        timeOfPost: date,
                        image: imgData.data.url,
                        description: data.description,
                        email: user.email,
                        specificatons:{
                            ram:data.ram,
                            storage:data.storage,
                            color:data.color,
                            battery:data.battery
                        }
                    }
                    fetch('', {
                        method:'POST',
                        headers:{
                            'content-type':'application/json',
                            authorization:`bearer ${localStorage.getItem('accessToken')}`
                        },
                        body:JSON.stringify(product)
                    })
                    .then(res => res.json())
                    .then(productData => {
                        console.log(productData);
                    })
                }
            })

    }
    return (
        <div>
            <h2 className='text-3xl font-bold text-center my-8'>Add A Product</h2>
            <form onSubmit={handleSubmit(handleAddProduct)} className=" p-8">
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <div className="form-control w-full relative">
                        <label className="label">
                            <span className="label-text">Brand Name / Category Name</span>
                            {errors.categoryId && <p role="alert" className="absolute top-2 right-0 text-red-400 text-xs">*{errors.categoryId?.message}</p>}
                        </label>
                        <select {...register("categoryId", { required: "Required Field" })} className="select select-bordered">
                            <option value={"01"}>Apple</option>
                            <option value={"02"}>Samsung</option>
                            <option value={"03"}>Infinix</option>
                            <option value={"04"}>Oppo</option>
                            <option value={"05"}>Xaomi</option>
                        </select>
                    </div>
                    <div className="form-control w-full relative">
                        <label className="label">
                            <span className="label-text">Model Name</span>
                            {errors.modelName && <p role="alert" className="absolute top-2 right-0 text-red-400 text-xs">*{errors.modelName?.message}</p>}
                        </label>
                        <input {...register("modelName", { required: "Required Field" })} type="text" placeholder="Mobile Model Name" className="input input-bordered w-full " />
                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className="form-control w-full relative">
                            <label className="label">
                                <span className="label-text">RAM</span>
                                {errors.ram && <p role="alert" className="absolute top-2 right-0 text-red-400 text-xs">*{errors.ram?.message}</p>}
                            </label>
                            <select {...register("ram", { required: "Required Field" })} className="select select-bordered">
                                <option value={"4 GB"}>4 GB</option>
                                <option value={"6 GB"}>6 GB</option>
                                <option value={"8 GB"}>8 GB</option>
                                <option value={"12 GB"}>12 GB</option>
                                <option value={"16 GB"}>16 GB</option>
                            </select>
                        </div>
                        <div className="form-control w-full relative">
                            <label className="label">
                                <span className="label-text">Storage</span>
                                {errors.storage && <p role="alert" className="absolute top-2 right-0 text-red-400 text-xs">*{errors.storage?.message}</p>}
                            </label>
                            <select {...register("storage", { required: "Required Field" })} className="select select-bordered">
                                <option value={"32 GB"}>32  GB</option>
                                <option value={"64 GB"}>64  GB</option>
                                <option value={"128 GB"}>128 GB</option>
                                <option value={"256 GB"}>256 GB</option>
                                <option value={"1 GTB"}>1 TB</option>
                            </select>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className="form-control w-full relative">
                            <label className="label">
                                <span className="label-text">Color</span>
                                {errors.color && <p role="alert" className="absolute top-2 right-0 text-red-400 text-xs">*{errors.color?.message}</p>}
                            </label>
                            <input {...register("color", { required: "Required Field" })} type="text" placeholder="Mobile Color" className="input input-bordered w-full " />
                        </div>
                        <div className="form-control w-full relative">
                            <label className="label">
                                <span className="label-text">Battery mAh</span>
                                {errors.battery && <p role="alert" className="absolute top-2 right-0 text-red-400 text-xs">*{errors.battery?.message}</p>}
                            </label>
                            <input {...register("battery", { required: "Required Field" })} type="text" placeholder="Example: 5000" className="input input-bordered w-full " />
                        </div>
                    </div>
                    <div className="form-control w-full relative">
                        <label className="label">
                            <span className="label-text">Resell Price</span>
                            {errors.resellPrice && <p role="alert" className="absolute top-2 right-0 text-red-400 text-xs">*{errors.resellPrice?.message}</p>}
                        </label>
                        <input {...register("resellPrice", { required: "Required Field" })} type="text" placeholder="Resell Price" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full relative">
                        <label className="label">
                            <span className="label-text">Original Price</span>
                            {errors.originalPrice && <p role="alert" className="absolute top-2 right-0 text-red-400 text-xs">*{errors.originalPrice?.message}</p>}
                        </label>
                        <input {...register("originalPrice", { required: "Required Field" })} type="text" placeholder="Original Price" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full relative">
                        <label className="label">
                            <span className="label-text">Time Of Use</span>
                            {errors.timeUsed && <p role="alert" className="absolute top-2 right-0 text-red-400 text-xs">*{errors.timeUsed?.message}</p>}
                        </label>
                        <input {...register("timeUsed", { required: "Required Field" })} type="text" placeholder="Number of months" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full relative">
                        <label className="label">
                            <span className="label-text">Condition Type</span>
                            {errors.condition && <p role="alert" className="absolute top-2 right-0 text-red-400 text-xs">*{errors.condition?.message}</p>}
                        </label>
                        <select {...register("condition", { required: "Required Field" })} className="select select-bordered">
                            <option value={"Brand New"}>Brand New</option>
                            <option value={"Flawless"}>Flawless</option>
                            <option value={"Good"}>Good</option>
                            <option value={"Fair"}>Fair</option>
                            <option value={"Minor Damage"}>Minor Damage</option>
                        </select>
                    </div>
                    <div className="form-control w-full relative">
                        <label className="label">
                            <span className="label-text">Name</span>
                            {errors.name && <p role="alert" className="absolute top-2 right-0 text-red-400 text-xs">*{errors.name?.message}</p>}
                        </label>
                        <input {...register("name", { required: "Required Field" })} type="text" placeholder="Your Name" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full relative">
                        <label className="label">
                            <span className="label-text">Phone Number</span>
                            {errors.number && <p role="alert" className="absolute top-2 right-0 text-red-400 text-xs">*{errors.number?.message}</p>}
                        </label>
                        <input {...register("number", { required: "Required Field" })} type="text" placeholder="Your Number" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full relative">
                        <label className="label">
                            <span className="label-text">Location</span>
                            {errors.location && <p role="alert" className="absolute top-2 right-0 text-red-400 text-xs">*{errors.location?.message}</p>}
                        </label>
                        <input {...register("location", { required: "Required Field" })} type="text" placeholder="Your Location" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full relative">
                        <label className="label">
                            <span className="label-text">Upload A Product Image</span>
                            {errors.img && <p role="alert" className="absolute top-2 right-0 text-red-400 text-xs">*{errors.img?.message}</p>}
                        </label>
                        <input {...register("img", { required: "Required Field" })} type="file" placeholder="image" className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="form-control my-2 relative">
                    <label className="label">
                        <span className="label-text">Description About Specification of Mobile</span>
                        {errors.description && <p role="alert" className="absolute top-2 right-0 text-red-400 text-xs">*{errors.description?.message}</p>}
                    </label>
                    <textarea {...register("description", { required: "Required Field" })} className="textarea textarea-bordered h-24" placeholder="Description about mobile"></textarea>
                </div>
                <div className='flex justify-center my-4'>
                    <input type="submit" value="Submit" className='btn btn-primary px-8' />
                </div>
            </form>
        </div>
    );
};

export default AddProduct;