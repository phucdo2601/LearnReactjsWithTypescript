import React, { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import AutthComp from '../components/AutthComp';
import DashboardComp from '../components/DashboardComp';
import ProfileComp from '../components/ProfileComp';

const RouterPage = () => {

    const [auth, setAuth] = useState<any>(false);

    useEffect(() => {
        let user = localStorage.getItem("user");
        user && JSON.parse(user) ? setAuth(true) : setAuth(false);
    }, []);

    // useEffect(() => {
    //     localStorage.setItem("user", auth);
    // }, [auth]);

    const loginFunc = () => {
        setAuth(true);
        localStorage.setItem("user", true + "");
    }

    const logoutFunc = () => {
        setAuth(false);
        localStorage.setItem("user", false + "");
    }
 
    return (
        <>
            <div>
                <Routes>
                    {
                        !auth && <>
                            <Route path='/login' element={<AutthComp authenticate={loginFunc} />} />
                        </>
                    }

                    {
                        auth && <>
                            <Route
                                path="/profile"
                                element={<ProfileComp logout={logoutFunc} />}
                            />
                            <Route path="/dashboard" element={<DashboardComp logout={logoutFunc} />} />
                        </>
                    }

                    <Route path="*" element={<Navigate to={auth ? "/profile" : "/login"} />} />
                </Routes>
            </div>
        </>
    )
}

export default RouterPage