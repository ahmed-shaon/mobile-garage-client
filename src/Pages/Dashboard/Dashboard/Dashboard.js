import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import useAdmin from '../../../Hook/useAdmin';
import useSeller from '../../../Hook/useSeller';
import Loading from '../../Shared/Loading/Loading';
import AllSellers from '../AllSellers/AllSellers';
import MyOrders from '../MyOrders/MyOrders';
import MyProducts from '../MyProducts/MyProducts';

const Dashboard = () => {

    const {user} = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const [isSeller, isSellerLoading] = useSeller(user?.email);

    if(isAdminLoading || isSellerLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            {
                !isSeller && !isAdmin && <MyOrders></MyOrders>
            }
            {
                isSeller && !isAdmin && <MyProducts></MyProducts>
            }
            {
                isAdmin && <AllSellers></AllSellers>
            }                        
        </div>
    );
};

export default Dashboard;<h2>Dashboard</h2>