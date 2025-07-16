import { useEffect, useState } from "react"

const useFetch = (url) => {

    const [post,setPost]=useState({})

    async function getPosts(){
        const res=await fetch(url) // "https://jsonplaceholder.typicode.com/posts/1"
        const json=await res.json()
        console.log("json", json)
        setPost(json)
    }

    useEffect(()=>{
     getPosts()
    },[url])

  return {
    post
  }

}

export default useFetch
