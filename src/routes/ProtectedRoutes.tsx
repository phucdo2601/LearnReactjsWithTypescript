import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const useAuth = () => {
    let user: any;

    const _user = localStorage.getItem("user");
    if (_user) {
        user = JSON.parse(_user)
        console.log("user", user)
    }

    if (user) {
        return {
            auth: true,
            // role: user.role,
        }
    } else {
        return {
            auth: false,
            // role: user.role,
        }
    }
}

const ProtectedRoutes = () => {
    const {auth} = useAuth();

    return auth ? (
       
            <Outlet />
        
    ) : (
        <Navigate to="/login" />
    )
}

export default ProtectedRoutes