import { useEffect, useState } from "react";
// import IdeaBox from "./src/pages/Ideas";
// import NewPost from "../components/NewPost";

// import ProfileSide from '../components/ProfileSide';
import axios from "axios";
import NewPost from "../components/NewPost";
import IdeaBox from "./PostBox";
export default function Ideas() {
   const person ={
    name : 'John',
    content: "What did the Dursleys care if Harry lost his place on the House Quidditch team because he hadn’t practiced all summer? What was it tothe Dursleys if Harry went back to school without any of his homework done? The Dursleys were what wizards called Muggles (not a drop of magical blood in their veins).",
    colors: [
      "Harry Potter", "Muggle", "Dursleys"
    ]
  }
  return (
    <div className="ml-12">
      <NewPost feedType="idea" />

      <IdeaBox data={ideaFeed} />
    </div>
  );
}
