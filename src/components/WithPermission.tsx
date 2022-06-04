import React from 'react'

type Props = {
    roleRequired: "Admin" | "User" | "Lecturer" | "StaffTraingRoom";
    message?: string;
    children?: React.ReactNode;
}

const useRole = () => {

    let user: any;


    //we can use from actual server, context, localStorage
    const _user = localStorage.getItem("user");

    if (_user) {
        user = JSON.parse(_user);
        console.log("The role of JSON.parse: " + user);

    }

    if (user) {
        return user.role

    } else {
        return "User";
    }

}

const WithPermission = (props: Props) => {
    const { roleRequired, message, children } = props;
    const role = useRole();
    return (
        <>
            {
                roleRequired === role ? children : (
                    <>
                        <h3>
                            {
                                message ? message : ""
                            }
                        </h3>
                    </>
                )
            }


        </>
    )
}

export default WithPermission