import React from 'react'
import { useNavigate } from 'react-router-dom';

const AutthComp = (props: any) => {
    const { authenticate } = props;

    const navigate = useNavigate();

    const handleAuthenticate = () => {
        authenticate();
        navigate("profile");
    }

    return (
        <>
            <div>
                <h2> Please authenticate to continue </h2>
                <button onClick={handleAuthenticate}>Login</button>
            </div>
        </>
    )
}

export default AutthComp