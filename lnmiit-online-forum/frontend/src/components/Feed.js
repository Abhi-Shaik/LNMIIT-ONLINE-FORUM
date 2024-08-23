import React, {useState} from 'react'
import ForumBox from './ForumBox'
import "./css/Feed.css"
import Post from './Post'
import axios from 'axios'
import { useEffect } from 'react'

function Feed() {
  const [posts,setPosts] = useState ([])
  useEffect(()=> {
    axios
    .get('/api/questions')
    .then((res) =>{
      console.log(res.data.reverse())
      setPosts(res.data)
    })
    .catch((e) =>{
      console.log(e)
    });
  },[])
  return (
    <div className='feed'>
      <ForumBox/>
      {
        posts.map((post, index) => (<Post key={index} post={post}/>
        ))}
    </div>
  )
}

export default Feed
