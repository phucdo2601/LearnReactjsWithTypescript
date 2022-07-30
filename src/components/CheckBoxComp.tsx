import React from 'react'

const CheckBoxComp = (props : any) => {
    const {value, onChange} = props;

  return (
    <>
        <div>
            <input type="checkbox" checked={value} onChange={onChange}/>
        </div>
    </>
  )
}

export default CheckBoxComp