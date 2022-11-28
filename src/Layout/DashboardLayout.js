import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import useAdmin from '../Hook/useAdmin';
import useSeller from '../Hook/useSeller';
import Loading from '../Pages/Shared/Loading/Loading';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const [isSeller, isSellerLoading] = useSeller(user?.email);


    if (isAdminLoading || isSellerLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side shadow-xl font-bold lg:pt-8">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {
                            !isSeller && !isAdmin && <>
                                <li><Link to="/dashboard/myorders">My Orders</Link></li>
                                <li><Link to="/dashboard/mywishlist">My WishList</Link></li>
                            </>
                        }

                        {
                            isSeller && <>
                                <li><Link to="/dashboard/addaproduct">Add A Product</Link></li>
                                <li><Link to="/dashboard/myproducts">My Products</Link></li>
                            </>
                        }
                        {
                            isAdmin && <>
                                <li><Link to="/dashboard/allseller">All Sellers</Link></li>
                                <li><Link to="/dashboard/allbuyer">All Buyers</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;