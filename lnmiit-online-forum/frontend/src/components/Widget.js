import React, { useState } from 'react'
import WidgetContent from './WidgetContent'
import "./css/Widget.css"
import Modal from 'react-responsive-modal';
import CloseIcon from '@material-ui/icons/Close';
import {  Input } from '@material-ui/core';




function Widget() {
  const[isModalOpen, setIsModalOpen]=useState(false);
  const Close =<CloseIcon />;

  return (
    <div className='widget'>
      <div className='widget_header'>
        <h5>Spaces to follow</h5>
      </div>
      <div className='widget_contents'>
        <WidgetContent/>
      </div>
      <button onClick={()=> setIsModalOpen(true)} className='feedback_button'>Feedback </button>
        <Modal open = {isModalOpen} 
        closeIcon = {Close} 
        onClose={()=>setIsModalOpen(false)}
        closeOnEsc
        center
        closeOnOverlayClick={false}
        styles={{
          overlay:{
            height:"auto"
          }
        }}
        >
          <div className='modal_title'>
            <h5>Give us a feedback </h5>
            </div>
            <div className='modal_field'>
              <Input type='text' placeholder='Tell us how we can improve'/>
            </div>
            <div className='modal_buttons'>
              <button className='cancel' onClick={()=> setIsModalOpen(false)}>
                Cancel
              </button>
              <button className='add' type='submit'>
                Submit
              </button>
            </div>
        </Modal>
    </div>
  )
}

export default Widget
