import React from 'react'
import { Outlet } from 'react-router-dom'
import "../../src/style.css";

const InnerContent = () => {
    return (
        <>
            <div className="inner-content">
                <Outlet />
                {/* Inner Content */}
            </div>
        </>
    )
}

export default InnerContent