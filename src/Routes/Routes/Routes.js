import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import SignupLayout from "../../Layout/SignupLayout";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/Dashboard/AllSellers/AllSellers";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MyWishList from "../../Pages/Dashboard/MyWishList/MyWishList";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import SignupOption from "../../Pages/Signup/SignupOption";
import SignupSeller from "../../Pages/Signup/SignupSeller";
import SignupUser from "../../Pages/Signup/SignupUser";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/signin',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SignupLayout></SignupLayout>,
                children:[
                    {
                        path:'/signup',
                        element:<SignupUser></SignupUser>
                    },
                    {
                        path:'/signup/user',
                        element:<SignupUser></SignupUser>
                    },
                    {
                        path:"/signup/seller",
                        element:<SignupSeller></SignupSeller>
                    }
                ]
            }
        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/dashboard',
                element:<Dashboard></Dashboard>
            },
            {
                path:'/dashboard/myorders',
                element:<MyOrders></MyOrders>
            },
            {
                path:'/dashboard/mywishlist',
                element:<MyWishList></MyWishList>
            },
            {
                path:'/dashboard/allseller',
                element:<AllSellers></AllSellers>
            },
            {
                path:'/dashboard/allbuyer',
                element:<AllBuyers></AllBuyers>
            },
            {
                path:'/dashboard',
                element:<Dashboard></Dashboard>
            },
        ]
    }
    
])