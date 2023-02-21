import React from 'react'
import Welcome from './Welcome'
function ParentComponent() {
    const btnClick=(value)=>{
        alert(value)
       
    }
  return (
   <>
    <Welcome  onbuttonclick={btnClick} />
    
   </>
  )
}

export default ParentComponent