import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import SignupLayout from "../../Layout/SignupLayout";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignupOption from "../../Pages/Signup/SignupOption";
import SignupSeller from "../../Pages/Signup/SignupSeller";
import SignupUser from "../../Pages/Signup/SignupUser";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
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
        children:[
            {
                path:'/dashboard',
                element:<Dashboard></Dashboard>
            },
            {
                path:'/dashboard/myorders',
                element:<Dashboard></Dashboard>
            },
            {
                path:'/dashboard',
                element:<Dashboard></Dashboard>
            },
            {
                path:'/dashboard',
                element:<Dashboard></Dashboard>
            },
            {
                path:'/dashboard',
                element:<Dashboard></Dashboard>
            },
            {
                path:'/dashboard',
                element:<Dashboard></Dashboard>
            },
        ]
    }
    
])