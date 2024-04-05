import React from 'react'
import IdeaBox from './IdeaBox';
import NewPost from '../components/NewPost'

import ProfileSide from '../components/ProfileSide';
export default function Ideas() {
   const person ={
    name : 'John',
    image : '../src/assets/react.svg',
    content: "What did the Dursleys care if Harry lost his place on the House Quidditch team because he hadn’t practiced all summer? What was it tothe Dursleys if Harry went back to school without any of his homework done? The Dursleys were what wizards called Muggles (not a drop of magical blood in their veins)."
   }
  return (
    <>
    <NewPost />
     
 
  <IdeaBox person={person}/>

    </>
  )
}
