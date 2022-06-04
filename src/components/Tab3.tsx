import React from 'react'
import "../../src/style.css";
import WithPermission from './WithPermission';

const Tab3 = () => {
  return (
    <>
      <div className="tab3">
        <h2>Welcome to tab3 page</h2>

        <WithPermission roleRequired="Admin" message="Only Admin can view this">
          <h1>Welcome Admin!</h1>
          <button>Edit</button>
        </WithPermission>
      </div>
    </>
  )
}

export default Tab3