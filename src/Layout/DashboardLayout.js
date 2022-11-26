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

    console.log('admin', isAdmin)
    console.log('seller', isSeller)

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
                <div className="drawer-side shadow-xl font-bold">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {
                            !isSeller && !isAdmin && <>
                                <li><Link to="/myorders">My Orders</Link></li>
                                <li><Link to="/mywishlist">My WishList</Link></li>
                            </>
                        }
                        {
                            isSeller && <>
                                <li><Link to="/addaproduct">Add A Product</Link></li>
                                <li><Link to="/myproducts">My Products</Link></li>
                            </>
                        }
                        {
                            isAdmin && <>
                                <li><Link to="/allsellers">All Sellers</Link></li>
                                <li><Link to="/allbuyers">All Buyers</Link></li>
                                <li><Link to="/reporteditem">Reported Item</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;