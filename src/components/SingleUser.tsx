import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { UserType } from '../models/UserType';

const SingleUser = () => {
    const params = useParams();

    const [user, setUser] = useState<UserType>();

    useEffect(() => {
        console.log("Params", params);
        fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
            .then(response => response.json())
            .then(json => setUser(json))

    }, [params]);


    return (
        <>
            <Link to='/users'>Go back</Link>
            {user && (<div className="users__card" key={user.id}>

                <p>Name:<span className="normal">{user.name}</span> </p>

                <p>Email: <span className="normal">{user.email}</span></p>
                <p>Phone: <span className="normal">{user.phone}</span></p>
                <p>Website: <span className="normal">{user.website}</span></p>

            </div>
            )
            }
        </>

    )
}

export default SingleUser