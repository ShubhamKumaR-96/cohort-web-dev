import React, { useState } from 'react'

const showPost = () => {
  [currentPost,setCurrebtPost]=useState(1)
  const {post}=useFetch(`https://jsonplaceholder.typicode.com/posts/${currentPost}`)
  return (
   <div style={{textAlign:"center", marginTop:"50px"}}>
    <button onClick={()=>setCurrebtPost(1)}>Post 1</button>
    <button onClick={()=>setCurrebtPost(2)}>Post 2</button>
    <button onClick={()=>setCurrebtPost(3)}>Post 3</button>
    <div>
      {post.title}
    </div>const
   </div>
  );
}

export default showPost
