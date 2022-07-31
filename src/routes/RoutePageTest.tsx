import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useRoutes } from 'react-router-dom'
import AutthComp from '../components/AutthComp';
import DashboardComp from '../components/DashboardComp';
import ProfileComp from '../components/ProfileComp';
import ProtectedRoutes from './ProtectedRoutes';
import PublicRoutes from './PublicRoutes';

const RoutePageTest = () => {

    const [auth, setAuth] = useState<any>(false);

    const navigate = useNavigate();

    useEffect(() => {
        let user = localStorage.getItem("user");
        user && JSON.parse(user) ? setAuth(true) : setAuth(false);
        console.log(user);

    }, []);

    const loginFunc = () => {
        setAuth(true);
        localStorage.setItem("user", true + "");
        navigate("/profile")
    }

    const logoutFunc = () => {
        setAuth(false);
        localStorage.setItem("user", false + "");
        localStorage.removeItem("user");

    }

    let element = useRoutes([
        {
            path: "/login",
            element: <PublicRoutes />,
            children: [
                {
                    element: <AutthComp authenticate={loginFunc} />,
                    index: true
                }
            ]

        },
        {
            path: "/",
            element: <ProtectedRoutes />,
            children: [
                {
                    element: <Navigate to={"/profile"} replace />,
                    index: true

                },
                {
                    path: "profile",
                    element: <ProfileComp logout={logoutFunc} />
                },
                {
                    path: "dashboard",
                    element: <DashboardComp logout={logoutFunc} />
                },
            ]
        },

        {
            path: "*",
            element: <Navigate to={auth === true ? "/profile" : "/login"} />,
        },
    ]);
    return element;
}

export default RoutePageTest