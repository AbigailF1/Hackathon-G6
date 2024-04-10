import React, {useEffect, useState} from 'react'
import NewPost from '../components/FeedComp/NewPost'
import PostBox from '../components/FeedComp/PostBox';
import axios from 'axios';
export default function Posts() {
  const url ='https://course-api.com/react-store-products'
  const person ={
    name : 'John',
    image : "../src/assets/img.jpg",
    content: "What did the Dursleys care if Harry lost his place on the House Quidditch team because he hadn’t practiced all summer? What was it tothe Dursleys if Harry went back to school without any of his homework done? The Dursleys were what wizards called Muggles (not a drop of magical blood in their veins)."
   }
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
    <div className='ml-2 md:ml-12'>
    <NewPost />
    {posts.map((item, index) => (
        <PostBox key={index} person={item} />
      ))}
 

    </div>
  )
}
