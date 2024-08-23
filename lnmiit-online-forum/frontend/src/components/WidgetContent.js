import React from 'react'
import "./css/WidgetContent.css"
import { Avatar } from '@material-ui/core'
import { CenterFocusStrong } from '@material-ui/icons'


function WidgetContent() {
  return (
    <div className='widget_contents'>
        <div className='widget_content'>
            <img src='https://s2.gifyu.com/images/Mobile-App.png' 
            alt=''
            />
            <div className='widget_contentTitle'>
                <h5>Mobile App Programmer</h5>
                <p>The best Mobile App Development Company</p>
            </div>
        </div>   
        <div className='widget_content'>
          <div className='widget_contentTitle' style={{
            padding: 7
          }}>
            <h5 style={{
              marginLeft: 50
            }}>Top Rated User</h5>
            <Avatar style={{
              marginLeft: 75
            }}/>
            <p style={{
              marginLeft: 70
            }}>Username</p>
          </div>
        </div>  
    </div>
  )
}

export default WidgetContent
