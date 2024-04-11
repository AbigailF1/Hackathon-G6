import React, {useEffect, useState} from 'react'
import NewPost from '../components/FeedComp/NewPost'
import PostBox from '../components/FeedComp/PostBox';
import axios from 'axios';
export default function Posts() {
  const url ='https://course-api.com/react-store-products'
  
   const [posts , setPosts] = useState([])
   const fetchData = async () =>{
    try{
      const response = await axios(url)
      const data = response.data;
      setPosts(data)
      console.log(data)
    }catch (error){
        console.log('Error')
    }
   }

   useEffect(() =>
  {fetchData()} ,
   [])
  return (
    <div className='ml-2 sm:ml-2 md:ml-2 lg:ml-12'>
    <NewPost />
    {posts.map((item, index) => (
        <PostBox key={index} person={item} />
      ))}
 

    </div>
  )
}
