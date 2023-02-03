import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'

//dummy data
const Home = () => {

  const [posts,setPosts] = useState([])

  const cat = useLocation().search
 

  useEffect(() => {
    const fetchData = async () => {
      try{
        const res = await axios.get(`/posts${cat}`)
          if(cat === ""){
            res.data.reverse();
            res.data = res.data.slice(0,5);
          }
        setPosts(res.data)
      }
      catch(err){console.log(err)}
    }

    

    fetchData()
  }, [cat])

  console.log(posts)

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }

  return (
    <div className='home'>
      <div className="posts">
        {posts.map(post => (
          <div className="post" key={post.id}>
            <div className="img">
              <img className='imgIn' src={`../upload/${post.img}`} alt=""/>
            </div>
            <div className="content">
              <Link className='link' to={`/post/${post.id}`}>
                <h1>{getText(post.title)}</h1>
              </Link>
              <p>{getText(post.desc)}</p>
              <Link className='link' to={`/post/${post.id}`}>
                <button>Read More</button>
              </Link>
            </div>
            <div className='linebreak'/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home