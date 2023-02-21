import React from 'react'

function Welcome(props) {
    const {onbuttonclick}=props
    const buttonClicked=()=>{
        onbuttonclick('Registration Succes ');
        
    }
  return (
    <>
        <button class="reg-btn" onClick={buttonClicked}>Register</button>
        
    </>
  )
}

export default Welcome