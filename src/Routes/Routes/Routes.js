import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import SignupLayout from "../../Layout/SignupLayout";
import Blog from "../../Pages/Blog/Blog";
import AddProduct from "../../Pages/Dashboard/AddAProduct/AddProduct";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/Dashboard/AllSellers/AllSellers";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import MyWishList from "../../Pages/Dashboard/MyWishList/MyWishList";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Products from "../../Pages/Products/Products/Products";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import SignupSeller from "../../Pages/Signup/SignupSeller";
import SignupUser from "../../Pages/Signup/SignupUser";
import AdminRoute from "../AdminRoute/AdminRoute";
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
            },
            {
                path:'/category/:id',
                element:<PrivateRoute><Products></Products></PrivateRoute>,
                loader: ({params}) => fetch(`https://mobile-garage-server.vercel.app/category/${params.id}`)
            },
            {
                path:'/blog',
                element:<Blog></Blog>
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
                path:'/dashboard/addaproduct',
                element:<AddProduct></AddProduct>
            },
            {
                path:'/dashboard/myproducts',
                element:<MyProducts></MyProducts>
            },
            {
                path:'/dashboard/allseller',
                element:<AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path:'/dashboard/allbuyer',
                element:<AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path:"/dashboard/payment/:id",
                element:<Payment></Payment>,
                loader: ({params}) => fetch(`https://mobile-garage-server.vercel.app/payment/${params.id}`)
            }
            
        ]
    }
    
])