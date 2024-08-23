import React, { useState } from 'react'
import { Home,FeaturedPlayListOutlined,AssignmentIndOutlined,PeopleAltOutlined, NotificationImportantOutlined, Search, ExpandMore } from '@material-ui/icons';
import {Avatar, Input } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import "./css/ForumHeader.css";
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import axios from 'axios';

function ForumHeader() {
  const[isModalOpen, setIsModalOpen]=useState(false);
  const[inputUrl, setInputUrl] = useState("");
  const [question, setQuestion]= useState("");
  const Close =<CloseIcon />;

  const handleSubmit = async () => {
    if(question !== ""){

      const config = {
        headers: {
          "Content-Type":"application/json"
        }
      }

      const body = {
        questionName: question,
        questionUrl: inputUrl
      }
      await axios
      .post("/api/questions",body,config)
      .then((res)=>{
        console.log(res.data);
        alert(res.data.message);
        window.location.href = "/";
      })
      .catch((e)=> {
        console.log(e);
        alert('Error in adding question')
      });
    }
    
  };

  return (
    <div className="fHeader">
      <div className="fHeader-content">
        <div>
          <img
            src="https://s2.gifyu.com/images/Online-forum.gif"
            alt="logo"
            className="fHeader_logo"
          />
        </div>
        <div className="fHeader_icons">
          <div className="fHeader_icon">
            <div className="fHeader_iconAlign">
              <Home />
            </div>
            <h4 className='fHeeader_iconlabel'>
              Home
            </h4>
          </div>
          <div className="fHeader_icon">
            <div className="fHeader_iconAlign">
              <FeaturedPlayListOutlined/>
            </div>
            <h4 className='fHeeader_iconlabel'>
              Spaces
            </h4>            
          </div>
          <div className="fHeader_icon">
            <div className="fHeader_iconAlign">
              <AssignmentIndOutlined />
            </div>
            <h4 className='fHeeader_iconlabel'>
              My Feed
            </h4>             
          </div>
          <div className="fHeader_icon">
            <div className="fHeader_iconAlign">
             <PeopleAltOutlined />
            </div>
            <h4 className='fHeeader_iconlabel'>
              Users
            </h4>   
          </div>
          <div className="fHeader_icon">
            <div className="fHeader_iconAlign">
              <NotificationImportantOutlined />
            </div>
            <h4 className='fHeeader_iconlabel'>
              Notifications
            </h4> 
          </div>
        </div>
        <div className='fHeader_input'>
          <Search/>
          <input type= "text" placeholder='Search questions'/>
        </div>
        <div className='fHeader_Rem'>
          <Avatar />
        </div>  
        <button onClick={()=> setIsModalOpen(true)} className='share_button'>Share Information </button>
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
            <h5>Add info </h5>
            <h5>Share link</h5>
            </div>
            <div className='modal_info'>
              <Avatar className='avatar'/>
              <div className='modal_scope'>
                <PeopleAltOutlined/>
                <p>Public</p>
                <ExpandMore/>
              </div>
            </div>
            <div className='modal_field'>
              <Input 
              value = {question}
              onChange = {(e) => setQuestion(e.target.value)}
              type='text' 
              placeholder='Start your information with What, How, Why,etc'/>
            <div style={{
              display:"flex",
              flexDirection:"column"
            }}>
              <input 
              type='text'
              value={inputUrl}
              onChange={(e)=>setInputUrl(e.target.value)}
              style={{
                margin:"5px 0",
                border:"1px solid lightgray",
                padding:"10px",
                outline:"2px solid #000" 
              }} 
              placeholder='Optional: include a link that gives context'/>
              {
                inputUrl !=="" && <img 
                style={{
                  height:"40vh",
                  objectFit: "contain"
                }} 
                src={inputUrl} alt='displayimage'/>}
            </div>
            </div>
            <div className='modal_buttons'>
              <button className='cancel' onClick={()=> setIsModalOpen(false)}>
                Cancel
              </button>
              <button onClick={handleSubmit} className='add' type='submit'>
                Post
              </button>
            </div>
        </Modal>
      </div>
    </div>
  )
}

export default ForumHeader
