import React from 'react'
import "../../src/style.css";
import { NavLink } from 'react-router-dom';


const Tab1 = () => {
  return (
    <>
      <div className="tab1">
        <h2>Welcome to tab1 page </h2>
        <NavLink to="/users/new" state={{ from: "tab 1", userName: "Phuc do" }}>Add a new User</NavLink>
      </div>
    </>
  )
}

export default Tab1