import React from 'react'
import { Outlet } from 'react-router-dom';
import TabNav from './TabNav';
import "../../src/style.css"

const Tabs = (props: any) => {
  const { userName } = props.props

  return (
    <>
      <div className="Tabs">
        <h1>Tab demo Page {userName}</h1>

        {/** Tab navigation  */}
        <TabNav />
        {/** Tab inner content */}
        <Outlet />
      </div>
    </>
  )
}

export default Tabs