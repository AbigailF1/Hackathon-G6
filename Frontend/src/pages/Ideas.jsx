import  { useEffect, useState } from 'react'
import IdeaBox from './IdeaBox';
import NewPost from '../components/NewPost'

// import ProfileSide from '../components/ProfileSide';
import axios from "axios";
export default function Ideas() {
  const[ideaFeed,setIdeaFeed]=useState(null)


useEffect(() => {
  // Define an async function to fetch data
  const fetchData = async () => {
    try {
      // Make the HTTP request using Axios
      const response = await axios.get("http://127.0.0.1:8000/api/feeds/idea/");
      // Extract the data from the response
      const data = response.data;
      console.log(data);
      // Set the fetched data to the state
      setIdeaFeed(data);
      // Log the data to the console
      console.log(data);
    } catch (error) {
      console.log(error);
      // Log any errors to the console
      console.error("There was a problem fetching the data:", error.message);
    }
  };

  // Call the async function to fetch data when the component mounts
  fetchData();
}, []); // E
console.log(ideaFeed);


   const person ={
    name : 'John',
    content: "What did the Dursleys care if Harry lost his place on the House Quidditch team because he hadn’t practiced all summer? What was it tothe Dursleys if Harry went back to school without any of his homework done? The Dursleys were what wizards called Muggles (not a drop of magical blood in their veins)."
   }
  return (
    <div className='ml-12'>
    <NewPost />
     
 
  <IdeaBox person={person}/>

    </div>
  )
}
