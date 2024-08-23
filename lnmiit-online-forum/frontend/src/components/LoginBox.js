import React from 'react'
//import LoginBoxL from"./LoginBoxL"
import LoginBoxR from"./LoginBoxR"
import './css/LoginBox.css'

function LoginBox() {
  return (
    <div className='loginBox'>
        {/* <div className='LoginBoxeL'>
        <LoginBoxL/>
        </div> */}
        <div className='LoginBoxR'>
        <LoginBoxR/>
        </div>
    </div>
  )
}

export default LoginBox
