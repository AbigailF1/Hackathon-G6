import React from 'react'
import { Tag } from 'antd';
export default function Tags({item}) {
  return (
        <Tag bordered={false} closable  color='gray' className='text-black'>
        {item}
      </Tag> 
  )
}
