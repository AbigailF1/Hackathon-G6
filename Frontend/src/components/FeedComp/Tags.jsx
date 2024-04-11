import React from 'react'
import {useNavigate} from 'react-router-dom';
import { Tag } from 'antd';
export default function Tags({item}) {
   const navigate = useNavigate();
   function handleSearch() {
    navigate(`/search/${item}`);
   }

  return (
        <Tag bordered={false}  color='gray' className='text-black' onClick={handleSearch}>
        {item}
      </Tag> 
  )
}
