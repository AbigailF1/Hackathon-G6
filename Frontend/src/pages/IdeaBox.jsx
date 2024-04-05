import React, { useState } from 'react'
import { Alert, Button, Space } from 'antd';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';

export default function IdeaBox({person}) {
    const[liked, setLiked] = useState(false);
   function toggleFav(){
    setLiked( (prev) => !prev);
   }
   const [comment,setComment] = useState('');
   const [apply,setApply] = useState(false);
   function handleComment(){
    console.log('comment', comment);
   }
   function change(event){
    setComment(event.target.value)
   }
   function toggleComment(){
    setApply((prev) => !prev);
   }
   function sendRequest(){
    console.log("Request sent");
   }
  return (
    <div className="flex flex-col m-5 pt-2.5 bg-white rounded max-w-[850px]">
        <div className='flex items-center gap-2'>
            <div className="avatar mx-2 mb-2">
                <div className="w-12 rounded">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component" />
                </div>
            </div>
            <div className='flex flex-col gap-0'>
                <div className='text-black text-center font-semibold' style={{fontFamily :"Adamina"}}>
                    {person.name}
                </div>
                <div className='text-xs text-gray-500' style={{fontFamily :"Adamina"}}>
                    position
                </div>
            </div>
        </div>
        <div className="mt-2.5 w-full border border-solid bg-zinc-100 border-zinc-100 min-h-[1px] max-md:max-w-full" />
        <div className="p-5" style={{fontFamily :"Adamina"}}>{person.content}</div>
        {person.image != null ? (
  <div className='border border-solid border-zinc-100'>
    <img src="../src/assets/img.jpg" alt="" className='h-auto max-w-lg rounded-lg w-full m-auto' />
  </div>
) : (
  " "
)}
      <div className="mt-2.5 w-full border border-solid bg-zinc-100 border-zinc-100 min-h-[1px] max-md:max-w-full" />
        <div className=' flex gap-16 m-5'>
        {liked ? <FavoriteOutlinedIcon sx={{ color: 'red' }} onClick ={toggleFav} /> : <FavoriteBorderOutlinedIcon onClick ={toggleFav} />}
    <TextsmsOutlinedIcon onClick={()=>    document.getElementById('my_modal_5').showModal()}/>
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box bg-white">
    <h3 className="font-bold text-lg">Comment</h3>
    <textarea type='text' className="py-4 w-full border rounded resize-none bg-slate-100 p-2 " 
                rows="2"
                placeholder='comment...'
                value={comment}
                onChange ={change}/>
    <div className="modal-action">
      <form method="dialog flex">
     
        <button className="btn bg-[rgb(5, 190, 250)] mr-5" onClick={handleComment}>Comment</button>
        <button className='btn bg-red-500 w-14 text-white'>    X     </button>
      </form>
    </div>
  </div>
    </dialog>
    <PersonAddAlt1OutlinedIcon onClick={toggleComment}/>
    {apply ? (
        <Space direction="vertical" style={{ width: '100%' }} >
         <Alert
         message="Successful!"
         description={`You have requested to join ${person.name}'s team`}
         type="success"
         banner
         closable
       />
     </Space>
    ) :('')}
        </div>
    </div>
    
  )
}
