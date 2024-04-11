import React from 'react'

export default function CommentBox() {
  return (
    <div className="flex flex-col flex-wrap m-5 md:shrink-0 pt-2.5 bg-white rounded w-[280px] overflow-x-hidden">
    <div className='flex  items-center gap-2'>
    <div className="avatar mx-2 mb-2">
        <div className="w-12 rounded">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component" />
        </div>
    </div>
    
    <div className='flex flex-col gap-0'>
        <div className='text-black text-center font-semibold' style={{fontFamily :"Adamina"}}>
            Username
        </div>
        <div className='text-xs text-gray-500' style={{fontFamily :"Adamina"}}>
            position
        </div>
    </div>
    </div>
<div className="mt-2.5 w-full border border-solid bg-zinc-100 border-zinc-100 min-h-[1px] max-md:max-w-full" />
<div className="p-5 text-black w-96" style={{fontFamily :"Adamina"}}>
his is comment.his is comment.his is comment.
his is comment.his is comment.his is comment
.his is comment.his is comment.his is comment
.his is comment.his is comment.his is comment.
his is comment.his is comment.his is comment.
</div>
</div>
  )
}
