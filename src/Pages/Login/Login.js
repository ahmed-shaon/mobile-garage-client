import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {useForm} from 'react-hook-form';
import facebook from '../../assets/icons/facebook.svg';
import google from '../../assets/icons/google.svg';
import github from '../../assets/icons/github.svg';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useToken from '../../Hook/useToken';
import Loading from '../Shared/Loading/Loading';
import { saveUser } from '../../Utilities/Utilities';


const Login = () => {
    const [error, setError] = useState('');
    const [userEmail, setUserEmail] = useState("");
    const {userLogin, createGoogleUser}  = useContext(AuthContext);
    const {register, formState:{errors}, handleSubmit} = useForm();
    const navigate= useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [token, isTokenLoading] = useToken(userEmail);

    // if(isTokenLoading){
    //     return <Loading></Loading>
    // }
    
    if(token){
        navigate(from, { replace: true });        
    }

    const handleLogin = data => {
        setError("");
        userLogin(data.email, data.password)
        .then(res => {
            const user= res.user;
            console.log(user);
            setUserEmail(data.email)            
        })
        .catch(error => {
            console.log(error);
            setError(error.message);            
        })
    }

    const handleGoogleSignin = () => {
        createGoogleUser()
        .then(res => {
            const user = res.user;
            console.log(user);
            saveUser(user.email, user.displayName, 'user', setUserEmail);
        })
        .catch(err => {
            setError(err.message);
        })
    }
    return (
        <div className='flex justify-center items-center h-[700px]'>
            <div className=' shadow-xl rounded-xl p-8'>
                <h2 className='text-3xl font-bold text-center'>Sign in</h2>
                <form onSubmit={handleSubmit(handleLogin)} className='w-[280px] lg:w-[300px]'>
                    <div className="form-control w-full relative py-2">
                        <label className="label">
                            <span className="label-text">Email</span>
                            {errors.email && <p role="alert" className="absolute top-4 right-0 text-red-400 text-xs">{errors.email?.message}</p>}
                        </label>
                        <input {...register("email", {required:"Email is required"})} type="text" placeholder="Email" className="input input-bordered w-full" />                        
                    </div>
                    <div className="form-control w-full relative py-2">
                        <label className="label">
                            <span className="label-text">Password</span>
                            {errors.password && <p role="alert" className="text-red-400 absolute top-4 right-0 text-xs">{errors.password?.message}</p>}
                        </label>
                        <input {...register("password", {required:"Password is required"})} type="password" placeholder="Password" className="input input-bordered w-full" />
                        <label className="label justify-end">
                            <button><span className="label-text-alt hover:text-gray-900">Forget Password?</span></button>
                        </label>
                        {error && <p className='text-red-400 absolute bottom-4'>{error.split("/")[1].split(")")[0]}</p>}                        
                    </div>                    
                    <div className='my-3'>
                        <input type="submit" className="btn btn-primary w-full" value="Sign in" />
                    </div>
                </form>
                <p className='my-8 text-xs'>Don't have an account? <Link to="/signup" className='text-primary'>Sign Up</Link></p>
                <div className="divider my-3">Sign in with social accounts</div>
                <div className='flex justify-around'>
                    <button onClick={handleGoogleSignin}><img src={google} alt='google-login' /></button>
                    <button><img src={facebook} alt='facebook-icon' /></button>
                    <button><img src={github} alt='github-login' /></button>
                </div>
            </div>
        </div>
    );
};

export default Login;