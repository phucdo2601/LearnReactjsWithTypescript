import React from 'react'
import { Outlet } from 'react-router-dom';
import TabNav from './TabNav';
import "../../src/style.css"

const Tabs = () => {
  return (
    <>
      <div className="Tabs">
        <h1>Tab demo Page</h1>

        {/** Tab navigation  */}
        <TabNav />
        {/** Tab inner content */}
        <Outlet />
      </div>
    </>
  )
}

export default Tabs