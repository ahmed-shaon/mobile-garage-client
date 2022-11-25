import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import SignupLayout from "../../Layout/SignupLayout";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignupOption from "../../Pages/Signup/SignupOption";
import SignupSeller from "../../Pages/Signup/SignupSeller";
import SignupUser from "../../Pages/Signup/SignupUser";

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
    
])