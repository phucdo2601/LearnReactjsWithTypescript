import React from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import "../../src/style.css";

const Sidebar = () => {
    const useAuth = () => {
        //we can use from actual server, context, localStorage
        const user = localStorage.getItem("user");
        if (user) {
            return true;
        } else {
            return false;
        }

    }

    const user = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    const logoutFunc = () => {
        localStorage.removeItem("user");
        navigate("/login");
    }

    return (
        <>
            <div className="sidebar">
                <div className="sidebar__items">

                    {
                        user && <>
                            <NavLink to="/dashboard" className={location.pathname === '/dashboard' ? "sidebar_active" : ""}>Dashboard</NavLink>
                            <NavLink to="/tabs" className={location.pathname.includes("/tabs") ? "sidebar_active" : ""}>Tabs</NavLink>
                            <NavLink to="/settings" className={location.pathname === '/settings' ? "sidebar_active" : ""}>Settings</NavLink>
                            <NavLink to="/users" className={location.pathname === '/users' ? "sidebar_active" : ""}>Users</NavLink>
                            {
                                location.pathname !== "/login" && <button onClick={logoutFunc}>Logout</button>
                            }
                        </>
                    }

                    {
                        !user && <>
                            <NavLink to="/login" className={location.pathname === '/login' ? "sidebar_active" : ""}>Login</NavLink>
                        </>
                    }

                </div>
            </div>
        </>
    )
}

export default Sidebar