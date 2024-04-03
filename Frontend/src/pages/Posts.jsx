
import React from 'react'
import NewPost from '../components/NewPost'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ProfileSide from '../components/ProfileSide';
export default function Posts() {

  return (
    <>
    <NewPost />
        <div className="flex flex-col pt-2.5 bg-white rounded max-w-[850px] left-0">
      <div className="mt-2.5 w-full border border-solid bg-zinc-100 border-zinc-100 min-h-[1px] max-md:max-w-full" />
      <div className="flex flex-col px-8 mt-4 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex gap-4 self-start text-neutral-900">
          <img
            src= '../src/assets/react.svg'
            className="shrink-0 aspect-square w-[52px]"
          />
          <div className="flex flex-col my-auto">
            <div className="text-sm">Theresa Steward</div>
            <div className="mt-1.5 text-xs leading-4">iOS developer</div>
          </div>
        </div>
        <div className="mt-5 text-sm leading-5 max-md:max-w-full">
          What did the Dursleys care if Harry lost his place on the House Quidditch team because he hadn’t practiced all summer? What was it to
          the Dursleys if Harry went back to school without any of his homework done? The Dursleys were what wizards called Muggles (not a drop of magical blood in their veins).
        </div>
      </div>
      <div className="mt-4 w-full border border-solid bg-zinc-100 border-zinc-100 min-h-[1px] max-md:max-w-full" />
      <div className="flex gap-5 justify-between self-center w-full text-xs uppercase whitespace-nowrap max-w-[789px] text-neutral-900 max-md:flex-wrap max-md:max-w-full">
        <div className="flex gap-5 justify-between">
          <div className="flex gap-1.5 my-auto">
            <ThumbUpOutlinedIcon />
            <div>42</div>
          </div>
          <div className="shrink-0 w-px border border-solid bg-zinc-100 border-zinc-100 h-[49px]" />
          <div className="flex gap-1.5 my-auto">
            <ChatBubbleOutlineOutlinedIcon  />
            <div>9</div>
          </div>
          <div className="shrink-0 border border-solid bg-zinc-100 border-zinc-100 h-[49px] w-[-19px]" />
        </div>
        <div className="flex gap-5 justify-between">
          <div className="shrink-0 w-px border border-solid bg-zinc-100 border-zinc-100 h-[49px]" />
          <div className="flex gap-2 my-auto">
          <img 
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACYklEQVR4nO2YTUgWQRjHf5oESYIEa2oQgkoQXupYkVB4kY5px+4idgmCLnrr0qVLUZ08J10Kutih6AuriwZK4sFDevCjD4KisomB54Vh2V133nfe3XltfrDsvuzM7vx3nuc/z7wQCAQCAQ9QDXaksueE+I7674TcAJrwk0HbHHkAHMAvLgI/bIR8lfMz4BB+cB34a5vsA8CqXC8D/ZTHPuC2jOUPMGGb7F3Ae/m9CZymeA4Cj2UMOqRGE8aZSLxB2oOKoCvjQ1Zlv3pq78Smtt4M7BLaNa0jV4AduX8LaKY+nAe+yHteAZHlOHM1GDHs7yHQilsuA7/k+TMZ9u9kZT8FbEi7N0AHtaMX3ynDXnebcWclSp/Erm67AhyjelqAe0YOjhVda3UCb6X9FnAWe9qAJ/KM78CFsorGw8Bnw551DuXlKLAgfdeAkxZ9nQrpNwbyU87a1a7m6HsC+CR9PogoG5wJGQa2pe0ScDxmz/cl9pMYMmq5p0C7pQgnQprFXXYMi9RxnmTPs0CvcU9b9STwW+5PA/uzBlMvIfrLPTLc5VrKnkXb87rRbh54CXwzwm+yxv2OqlaILhk+GnWPDo8sIgmvSu5UjhdVupsTIZfEGpUUcT3kp1WKvXPAEdyhbIToZL1prLbTBe8YnwPvUiqH3EIicRQltc84xTMn719IEDOVV8iqsVCdoRw6jHUqTUwq8cTsplwicT09nkXZbOWiIuJuDR7vhRhlWWt5K0Z5KsRajKrj4fpdi1liGk1IJw1IFAutIKIsojATnhDthZnA+Icmqc5qKF5nlPGBQAA7/gEWXrb/ZnaEQAAAAABJRU5ErkJggg=="
          className='w-10'/>
          </div>
        </div>
      </div>
    </div>
 
     <ProfileSide />

    </>
  )
}
