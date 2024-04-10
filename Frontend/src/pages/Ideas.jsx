import React from 'react'
import IdeaBox from '../components/FeedComp/IdeaBox';
import NewPost from '../components/FeedComp/NewPost'

export default function Ideas() {
   const person ={
    name : 'John',
    content: "What did the Dursleys care if Harry lost his place on the House Quidditch team because he hadn’t practiced all summer? What was it tothe Dursleys if Harry went back to school without any of his homework done? The Dursleys were what wizards called Muggles (not a drop of magical blood in their veins)."
   }
  return (
    <div className='ml-2 md:ml-12'>
    <NewPost />
  <IdeaBox person={person}/>

    </div>
  )
}
