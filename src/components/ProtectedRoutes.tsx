import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';



const useAuth = () => {

    //get item from localStorage
    let user: any;


    //we can use from actual server, context, localStorage
    const _user = localStorage.getItem("user");

    if (_user) {
        user = JSON.parse(_user);
        console.log("user", user);

    }

    if (user) {
        return {
            auth: true,
            role: user.role
        };
    } else {
        return {
            auth: false,
            role: null
        };
    }

}

/**
 * protected Route state
 */
type ProtectedRoutesType = {
    roleRequired?: "Admin" | "User" | "Lecturer" | "StaffTraingRoom";
}

const ProtectedRoutes = (props: ProtectedRoutesType) => {

    const { auth, role } = useAuth();

    /**
     * if the role required is there or not
     */
    // if (props.roleRequired) {
    //     return auth ? (
    //         props.roleRequired === role ? (<Outlet />) :
    //             (<Navigate to="/login" />)
    //     ) : (<Navigate to="/login" />)
    // } else {
    //     return auth ? <Outlet /> : <Navigate to="/login" />;

    // }

    //if the role required is there or not
    if (props.roleRequired) {
        return auth ? (
            props.roleRequired === role ? (
                <Outlet />
            ) : (
                <Navigate to="/denied" />
            )
        ) : (
            <Navigate to="/login" />
        )
    } else {
        return auth ? <Outlet /> : <Navigate to="/login" />
    }

}

export default ProtectedRoutes