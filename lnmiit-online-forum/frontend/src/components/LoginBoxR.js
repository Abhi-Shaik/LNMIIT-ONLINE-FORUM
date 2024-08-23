import React from 'react'
import './css/LoginBoxR.css'


function LoginBoxR() {
  return (
    <div className='LoginBoxR'>
        <div >
        <img
            src="https://s2.gifyu.com/images/Online-forum.gif"
            alt="logo"
            className='logo'
          />
        </div>
        <div className='welcome'>
            <h3>Hello LNMIITians!</h3>
        </div>
        <div className='input'>
              <input type='text' placeholder='Email'/>
              <input type='text' placeholder='Password'/>
        </div>
        <div className='modal_buttons'>
          <button className='add'>
                  SIGN IN
          </button>
          <button className='add'>
                  SIGN UP
          </button>
        </div>
      
    </div>
  )
}

export default LoginBoxR