import React, { useContext, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useAdmin from '../../Hook/useAdmin';
import Loading from '../../Pages/Shared/Loading/Loading';

const AdminRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);

    if(isAdminLoading){
        return <Loading></Loading>
    }

    if(loading){
        return <Loading></Loading>;
    }
    if(!(user?.uid && isAdmin) ){
        return <Navigate to='/signin' state={{from:location}} replace></Navigate>
    }
    return children;
};

export default AdminRoute;