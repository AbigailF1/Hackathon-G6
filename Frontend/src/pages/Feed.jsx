import React from 'react'
import Ideas from './Ideas';
import Posts from './Posts';
import { Tabs } from 'antd';
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: 'Ideas',
    children: <Ideas /> ,
  },
  {
    key: '2',
    label: 'Posts',
    children: <Posts /> ,
  },
];
export default function Feed() {
  return (
<div className='m-14'>
<Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
</div>
    )
}
