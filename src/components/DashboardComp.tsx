import React from 'react'

const DashboardComp = (props: any) => {
    const { logout } = props;

    return (
        <>
            <div>
                <>
                    DashboardComp
                    <h1> Hi you are logged in</h1>
                    <button onClick={logout}>Logout</button>
                </>
            </div>
        </>

    )
}

export default DashboardComp