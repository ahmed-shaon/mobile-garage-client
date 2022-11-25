import React from 'react';
import { Outlet } from 'react-router-dom';
import SignupOption from '../Pages/Signup/SignupOption';

const SignupLayout = () => {
    return (
        <div>
            <SignupOption></SignupOption>
            <Outlet></Outlet>
        </div>
    );
};

export default SignupLayout;