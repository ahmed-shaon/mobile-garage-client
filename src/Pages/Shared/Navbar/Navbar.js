import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const activeStyle = {
    textDecoration:'underline'
}
const Navbar = () => {
    const { user, userLogout } = useContext(AuthContext);

    const handleSignout = () => {
        userLogout()
            .then(() => { })
            .catch(error => console.log(error))
    }
    const navItem = <>
        <li><NavLink style={({isActive}) => isActive ? activeStyle : undefined} to="/">Home</NavLink></li>
        <li><NavLink style={({isActive}) => isActive ? activeStyle : undefined} to="/dashboard">Dashboard</NavLink></li>
        {
            user?.uid ? <li><button onClick={handleSignout}>Sign out</button></li>
                : <li><NavLink to='/signin'>Sign in</NavLink></li>
        }

    </>
    return (
        <div className="navbar lg:px-20 bg-primary text-white text-bold font-semibold flex justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52  text-black">
                        {
                            navItem
                        }
                    </ul>
                </div>
                <NavLink to='/' className="btn btn-ghost normal-case text-xl">MobileGarage</NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {
                        navItem
                    }
                </ul>
            </div>
            <label tabIndex={0} htmlFor="dashboard-drawer" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    );
};

export default Navbar;