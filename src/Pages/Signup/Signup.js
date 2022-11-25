import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import google from '../../assets/icons/google.svg';
import facebook from '../../assets/icons/facebook.svg';
import github from '../../assets/icons/github.svg';
import { Link } from 'react-router-dom';
import { AuthContex } from '../../Contex/AuthProvider/AuthProvider';

const Signup = ({ role, title }) => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [error, setError] = useState('');
    const {createUser} = useContext(AuthContex);
    const [userEmail, setUserEmail] = useState("");

    const handleLogin = data => {
        setError("");
        createUser(data.email, data.password)
        .then(res => {
            const user = res.user;
            console.log(user);
            saveUser(user.email, role)
        })
        .catch(err => {
            setError(err.message);
            console.log(err)
        })
    }

    const saveUser = (email, type) =>{
        const user = {
            email,
            type
        }
    }
    return (
        <div className='flex justify-center items-center'>
            <div className=' shadow-xl rounded-xl p-8'>
                <h2 className='text-3xl font-bold text-center mb-3'>Sign up as {title}</h2>
                <form onSubmit={handleSubmit(handleLogin)} className='w-[280px] lg:w-[300px]'>
                    <div className="form-control w-full relative">
                        <label className="label">
                            <span className="label-text">Name</span>
                            {errors.email && <p role="alert" className="absolute top-2 right-0 text-red-400 text-xs">{errors.name?.message}</p>}
                        </label>
                        <input {...register("name", { required: "Name is required" })} type="text" placeholder="First & Last Name" className="input input-bordered w-full" />
                        
                    </div>
                    <div className="form-control w-full relative">
                        <label className="label">
                            <span className="label-text">Email</span>
                            {errors.email && <p role="alert" className="absolute top-2 right-0 text-red-400 text-xs">{errors.email?.message}</p>}
                        </label>
                        <input {...register("email", { required: "Email is required" })} type="text" placeholder="Email" className="input input-bordered w-full" />                        
                    </div>
                    <div className="form-control w-full relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                            {errors.password && errors.password?.message.length< 30 && <p role="alert" className="text-red-400 absolute top-2 right-0 text-xs">{errors.password?.message}</p>}
                        </label>
                        <input {...register("password", { required: true, minLength: {value:6, message:'password atleast 6 characters'}, pattern:{value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, message:"password must have uppercase, number and special character"}} )} type="password" placeholder="Password" className="input input-bordered w-full" /> 
                        {errors.password && errors.password?.message.length> 30 && <p role="alert" className="text-red-400 absolute top-20 text-xs">{errors.password?.message} </p>}                                              
                    </div>
                    {error && <p className='text-red-400'>{error}</p>}
                    <div className='py-8'>
                        <input type="submit" className="btn btn-primary w-full" value="Sign up" />
                    </div>
                </form>
                <p className='mb-8 text-xs'>Already have an account? <Link to="/signin" className='text-primary'>Sign in</Link></p>
                {
                    role === "user" && <>
                        <div className="divider my-3">Sign in with social accounts</div>
                        <div className='flex justify-around'>
                            <button><img src={google} alt='google-login' /></button>
                            <button><img src={facebook} alt='facebook-icon' /></button>
                            <button><img src={github} alt='github-login' /></button>
                        </div>
                    </>
                }
            </div>
        </div>
    );
};

export default Signup;