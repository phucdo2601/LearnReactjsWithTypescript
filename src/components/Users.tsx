import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { UserType } from '../models/UserType';


const Users = (props: any) => {

    const [users, setUsers] = useState<Array<UserType>>([]);

    useEffect(() => {
        console.log("Prop from router: ", props);
        // alert("Prop from router: ", props);

        //fetch users from json placeholder
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setUsers(json))
    }, [])

    return (
        <>
            <div className="users">

                <h1>All List Users</h1>
                <NavLink to="/users/new">Add a new User</NavLink>
                <div className="user__list">
                    {
                        users && users.map((user) => (
                            <div className="users__card" key={user.id}>
                                <NavLink to={`/users/${user.id}`} >
                                    <p>Name:<span className="normal">{user.name}</span> </p>
                                </NavLink>

                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Users