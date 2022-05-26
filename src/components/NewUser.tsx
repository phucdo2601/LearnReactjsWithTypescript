import React, { useState } from 'react'
import { UserType } from '../models/UserType'
import "../../src/style.css";
import { NavLink, useLocation } from 'react-router-dom';
const NewUser = () => {

    const location = useLocation()

    const [newUser, setNewUser] = useState<UserType>({
        id: 0,
        name: "",
        phone: "",
        email: "",
        website: "",
        address: {}

    });

    const handleChange = (e: any) => {
        console.log("handleChange", e.target.value);
        const _newUserData = {
            ...newUser,
        } as any

        _newUserData[e.target.name] = e.target.value

        setNewUser(_newUserData)
    }

    const handlePostData = () => {
        console.log("new user data", newUser)

        //post request for API

        alert("Data posted successfully")

    }

    //location state
    const [locatioState, setLocationState] = React.useState({
        from: "",
        userName: "",
    })

    return (
        <>
            <div className="new-user">
                <h1>
                    Add a new user from:{locatioState.from} by {locatioState.userName}
                </h1>
                <NavLink to="/users">Go back</NavLink>

                <div className="new-user__form">
                    <div className="new-user__form-group">
                        <label htmlFor="">Name</label>
                        <input
                            type="text"
                            name="name"
                            onChange={handleChange}
                            value={newUser.name}
                            placeholder="John Doe"
                        />
                    </div>
                    <div className="new-user__form-group">
                        <label htmlFor="">Phone</label>
                        <input
                            type="text"
                            name="phone"
                            onChange={handleChange}
                            value={newUser.phone}
                            placeholder="0004172"
                        />
                    </div>
                    <div className="new-user__form-group">
                        <label htmlFor="">Email</label>
                        <input
                            type="text"
                            name="email"
                            onChange={handleChange}
                            value={newUser.email}
                            placeholder="abc@something.com"
                        />
                    </div>
                    <div className="new-user__form-group">
                        <label htmlFor="">Website</label>
                        <input
                            type="text"
                            name="website"
                            onChange={handleChange}
                            value={newUser.website}
                            placeholder="www.something.com"
                        />
                    </div>
                    <div className="new-user__form-group">
                        <button onClick={handlePostData}>Save user data</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewUser