import React from 'react'
import { useNavigate } from 'react-router-dom'

const PermissionDenied = () => {
    const navigate = useNavigate();

    const goBackHomePage = () => {
        navigate(`/dashboard`);
    }

    return (
        <>
            <div className="tab1">
                <h2>Permission denied!</h2>

                <div>
                    <button onClick={goBackHomePage} style={{
                        cursor: 'pointer',
                    }}>Go Back Dashboard</button>
                </div>
            </div>
        </>
    )
}

export default PermissionDenied