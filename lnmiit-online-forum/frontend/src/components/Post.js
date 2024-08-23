import React, {useState} from 'react'
import "./css/Post.css"
import { Avatar } from '@material-ui/core'
import { ArrowDownwardOutlined, ArrowUpwardOutlined, ChatBubbleOutlineOutlined, MoreHorizOutlined, /*RepeatOneOutlined,*/ ShareOutlined } from '@material-ui/icons'
import CloseIcon from '@material-ui/icons/Close';
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css'; 
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 
import ReactTimeAgo from 'react-time-ago';
import axios from 'axios';
import ReactHtmlParser from 'html-react-parser';

function LastSeen({date}){
  if (!date) {
    // Handle the case where 'date' is undefined or null
    return null; // Or return a default value, message, or placeholder
  }

  return (
    <div>
      <ReactTimeAgo date={date} locale="en-US" timeStyle="round"/>
    </div>
  );
}
function Post({post}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [answer, setAnswer] = useState("")
  const Close =<CloseIcon />;

  const handleQuill = (value) =>{
    setAnswer(value);
  };
  // console.log(answer);

  const handleSubmit = async () => {
    console.log(answer, answer!== "");
    if(post?._id && answer!== ""){
      const config ={
        headers: {
          "Content-Type":"application/json"
        }
      }
      const body= {
        answer: answer,
        questionId: post?._id
      }
      await axios
      .post("/api/answers", body, config)
      .then((res) =>{
        console.log(res.data);
        alert('Answer added successfully');
        setIsModalOpen(false);
        window.location.href = '/';
      })
      .catch((e) => {
        console.log(e);
      })
    }
  } 
  return (
    <div className='post'> 
      <div className='post_info'>
        <Avatar/>
        <h4>User Name</h4>
        <small><LastSeen date={post?.createdAt}/></small>
      </div>
      <div className='post_body'>
        <div className='post_question'>
        <p>{post?.questionName}</p>
        <button 
        onClick={() => {
          setIsModalOpen(true)
          console.log(post?._id)
        }} 
        className='post_btnAnswer'>Answer</button>
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
        }}>
          <div className='modal_question'>
            <h1>{post?.questionName}</h1>
            <p>asked by {" "} <span className='name'>Username1</span> on 
            <span>{new Date(post?.createdAt).toLocaleString()} </span></p>
          </div>
          <div className='modal_answer'>
            <ReactQuill value={answer} onChange = {handleQuill} placeholder='Enter your answer'/>
          </div>
          <div className='modal_button'>
          <button className='cancel' onClick={()=> setIsModalOpen(false)}>
                Cancel
              </button>
              <button onClick={handleSubmit} className='add' type='submit'>
                Add Answer
              </button>
          </div>
        </Modal>
        </div>
        {post.questionUrl !=="" && <img src={post.questionUrl} alt='url'/>}
      </div>
      <div className='post_footer'>
        <div className='post_footerAction'>
            <ArrowUpwardOutlined/>
            <ArrowDownwardOutlined/>
        </div>
        {/* <RepeatOneOutlined/> */}
        <ChatBubbleOutlineOutlined/>
        <div className='post_footerRight'>
          <ShareOutlined/>
          <MoreHorizOutlined/>
        </div>
      </div>
      <p style={{
        color: "rgba(0,0,0,0.5)",
        fontsize:"12px",
        fontWeight:"bold",
        margin:"10px 0"

      }}>
        {post?.allAnswers.length} Answer(s)
      </p>

      <div style={{
        margin:"5px 0px 0px 0px",
        padding: "5px 0px 0px 20px",
        borderTop: "1px solid lightgray"
      }}className='post_answer'>
        <div style={{
          display:"flex",
          flexDirection:"column",
          width:"100%",
          padding:"10px 5px",
          borderTop:"1px solid lightgray"
        }}
        className='post-answer-container'>
          {
            post?.allAnswers?.map((_a) => (<>
            <div style={{
                display:"flex",
                alignItems:"center",
                marginBottom: "10px",
                fontSize:"12px",
                fontWeight:600,
                colour:"#888"
              }}
              className='post-answer'>
                  <Avatar/>
                  <div style={{
                    margin:"0px 10px"
                  }} 
                  className='post-info'>
              <p>Username2</p>
              <span>
                <LastSeen date={(_a?.createdAt)}/> 
              </span>
            </div>
          </div>
          <div className='post-answer'>{ReactHtmlParser(_a?.answer)}</div>
            </>
          ))}
        </div> 
      </div>
    </div>
  );
}

export default Post;
