import React from 'react'
import "./css/SidebarOptions.css"
import { Add } from '@material-ui/icons'

function SidebarOptions() {
  return (
    <div className='sidebarOptions'>
        <div className='sidebarOption'>
          <img 
          src='https://s10.gifyu.com/images/Computer-Programming.jpg'
          alt=''/>
          <p>Computer Programming</p>
        </div>
        <div className='sidebarOption'>
          <img 
          src='https://s2.gifyu.com/images/Psychology.jpg'
          alt=''/>
          <p>Psychology</p>
        </div>
        <div className='sidebarOption'>
          <img 
          src='https://s2.gifyu.com/images/Data-Structures--Algorithms.jpg'
          alt=''/>
          <p>Data Structures & Algorithms</p>
        </div>
        <div className='sidebarOption'>
          <img 
          src='https://s10.gifyu.com/images/Basic-Electronics.jpg'
          alt=''/>
          <p>Basic Electronics</p>
        </div>
        <div className='sidebarOption'>
          <img 
          src='https://s10.gifyu.com/images/Operating-Systems.jpg'
          alt=''/>
          <p>Operating Systems</p>
        </div>
        <div className='sidebarOption'>
          <img 
          src='https://s10.gifyu.com/images/Resume.png'
          alt=''/>
          <p>Resume</p>
        </div>
        <div className='sidebarOption'>
          <img 
          src='https://s10.gifyu.com/images/Classical-Physics.jpg'
          alt=''/>
          <p>Classical Physics</p>
        </div>
        <div className='sidebarOption'>
          <img 
          src='https://s2.gifyu.com/images/Placements.jpg'
          alt=''/>
          <p>Placements</p>
        </div>
        <div className='sidebarOption'>
          <Add />
          <p className='text'>Discover Spaces</p>
        </div>
    </div>
  )
}

export default SidebarOptions
