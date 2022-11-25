import {RoutesItem} from './modalRoutes'
import Login from "../pages/logIn/LogIn"
import SignUp from "../pages/signUp/SignUp"
export const Routers:RoutesItem=[
    {
        path:'/',
        name: 'Login',
        isAuth: false,
        component:Login
    },
    {
        path:'/signUp',
        name: 'SignUp',
        isAuth: false,
        component:SignUp
    }
]