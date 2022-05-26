import React from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import "../../src/style.css"
const TabNav = () => {

    const location = useLocation();

    return (
        <>
            <div className="tab-nav">
                <NavLink to="/tabs/tab1"
                    className={location.pathname === '/tabs/tab1' ? "tab_active" : ".tab_inactive"}
                >Tab 1</NavLink>
                <NavLink to="/tabs/tab2" className={location.pathname === '/tabs/tab2' ? "tab_active" : ".tab_inactive"}>Tab 2</NavLink>
                <NavLink to="/tabs/tab3" className={location.pathname === '/tabs/tab3' ? "tab_active" : ".tab_inactive"}>Tab 3</NavLink>
            </div>
        </>
    )
}

export default TabNav