import React from 'react'
import { Link } from 'react-router-dom'

const ProfileComp = (props: any) => {
    const { logout } = props;

    return (
        <>
            <div>
                <Link to="/dashboard">Dashboard</Link>
                <h1> Hi you are logged in</h1>
                <button onClick={logout}>Logout</button>
            </div>
        </>
    )
}

export default ProfileComp