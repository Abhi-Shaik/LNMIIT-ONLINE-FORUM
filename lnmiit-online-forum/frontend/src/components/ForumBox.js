import { Avatar } from '@material-ui/core'
import React from 'react'
import "./css/ForumBox.css"


function ForumBox() {
  return (
    <div className='forumBox'>
      <div className='forumBox_info'>
        <Avatar/>
      </div>
      <div className='forumBox_forum'> 
      <h5>Start a discussion!!!</h5>
      </div>
    </div>
  )
}

export default ForumBox
