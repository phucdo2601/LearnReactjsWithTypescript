import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import "../../src/style.css";

const Sidebar = () => {

    const location = useLocation();

    return (
        <>
            <div className="sidebar">
                <div className="sidebar__items">
                    <NavLink to="/dashboard" className={location.pathname === '/dashboard' ? "sidebar_active" : ""}>Dashboard</NavLink>
                    <NavLink to="/tabs" className={location.pathname.includes("/tabs") ? "sidebar_active" : ""}>Tabs</NavLink>
                    <NavLink to="/settings" className={location.pathname === '/settings' ? "sidebar_active" : ""}>Settings</NavLink>
                </div>
            </div>
        </>
    )
}

export default Sidebar