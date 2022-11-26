import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import Loading from '../../Pages/Shared/Loading/Loading';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <Loading></Loading>;
    }
    if(!user?.uid){
        return <Navigate to='/signin' state={{from:location}} replace></Navigate>
    }
    return children;
};

export default PrivateRoute;