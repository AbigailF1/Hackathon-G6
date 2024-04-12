import Profile from './Profile';
import GroupCard from './GroupCard';
import Tags from './Tags';
import { useState } from 'react';
export default function ProfileSide() {
  const person ={
    name : 'John',
    image : "../src/assets/img.jpg",
    profession: 'Web Developer',
    tags : [
      "tag 1", "tag 2", "tag 3", "tag 4", "tag 5", "tag 6"
    ],
    content: "What did the Dursleys care if Harry lost his place on the House Quidditch team because he hadn’t practiced all summer? What was it tothe Dursleys if Harry went back to school without any of his homework done? The Dursleys were what wizards called Muggles (not a drop of magical blood in their veins)."
   }
   const [tag, setTag]= useState(person.tags);
   console.log(tag)
  return (
    
    <section className='mt-14 flex flex-col gap-5 mr-2 md:mr-20  invisible md:visible'>
      <Profile person={person} />

  <div className="w-[320px] ml-4 shadow-sm  flex flex-col gap-4 justify-center">  
     <h4 className='text-center text-black font-bold'>My Groups</h4>  
     <GroupCard />
     <GroupCard />
     <GroupCard />
      </div>

  <div className= 'shadow-md bg-slate-100 rounded w-[300px] ml-7 p-7 gap-2 mb-20 invisible md:visible'>
    <div className='m-auto text-black'>FOLLOWED TAGS</div>
    <div className='grid grid-cols-3 gap-2 pt-5 text-black'>
      {tag.map((tags, index) => (
            <Tags key={index} item={tags} />
          ))} 
    </div>
  </div>
</section>
  );
}


