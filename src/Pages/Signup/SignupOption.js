import React from 'react';
import { NavLink } from 'react-router-dom';

const activeStyle = {
    textDecoration:"underline",
    textDecorationColor:"#037ef3",
    textDecorationThickness:"4px"
}


const SignupOption = () => {
    return (
        <div className='mt-12'>
            <h2 className='text-center text-lg lg:text-2xl'>A user can create an accoutn as a user account or a seller account. <br /> Choose your option before creating an account.</h2>
            <div className='flex justify-center mt-8 text-primary'>
                <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className='text-xl font-bold p-4 hover:bg-gray-300' to="/signup/user">User Account</NavLink>
                <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className='text-xl font-bold p-4 hover:bg-gray-300' to="/signup/seller">Seller Account</NavLink>
            </div>           
        </div>
    );
};

export default SignupOption;