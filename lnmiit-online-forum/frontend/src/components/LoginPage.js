import React from 'react'
import './css/LoginPage.css'
import LoginBox from './LoginBox'

function LoginPage() {
  return (
    <div style={{ 
        display: 'flex',
        backgroundImage: `url(https://s11.gifyu.com/images/baground.png)`,
        height: '100vh', 
        backgroundSize: 'cover', 
        }}>
            <div className='loginBox'>
            <LoginBox/>
            </div>
      </div>

      
  )
}

export default LoginPage
