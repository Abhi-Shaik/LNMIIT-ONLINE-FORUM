import React from 'react'
import './css/LoginBoxL.css'

function LoginBoxL() {
  return (
    <div className='LoginBoxL'>
        <div className='modal_title'>
            <h1>Sign In </h1>
        </div>
        <div className='modal_field'>
            <div style={{
                display:"flex",
                flexDirection:"column"
            }}>
            <input 
            type='text'
            style={{
            margin:"5px 0",
            border:"1px solid lightgray",
            padding:"10px",
            outline:"2px solid #000" 
            }} 
            placeholder='Email'/>
            <input 
            type='text'
            style={{
            margin:"5px 0",
            border:"1px solid lightgray",
            padding:"10px",
            outline:"2px solid #000" 
            }} 
            placeholder='Password'/>
            </div>
            <div className='forgotpass'>
                <h5>Forgot your password?</h5>
            </div>
            <div className='modal_buttons'>
              <button className='add'>
                SIGN IN
              </button>
            </div>
        </div>
    </div>
    

  )
}

export default LoginBoxL
