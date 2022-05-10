import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
         <div className="w3-bar w3-border w3-light-grey">
        <NavLink to="/" className="w3-bar-item w3-button">Home</NavLink>
        <NavLink to="/about" className="w3-bar-item w3-button">About Page</NavLink>
        <NavLink to="/layout" className="w3-bar-item w3-button">Layout</NavLink>
        <NavLink to="/test" className="w3-bar-item w3-button">Test Page</NavLink>
      </div>
    </>
  )
}

export default Header