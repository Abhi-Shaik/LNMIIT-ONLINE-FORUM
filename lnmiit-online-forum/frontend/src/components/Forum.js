import React from 'react'
import ForumHeader from './ForumHeader'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Widget from './Widget'
import "./css/Forum.css";

function Forum() {
  return (
    <div className='forum'>
      <ForumHeader/>  
      <div className='forum_contents'>
        <div className='forum_content'>
          <Sidebar />
          <Feed />
          <Widget />
        </div>

      </div> 
    </div>
  )
}

export default Forum
