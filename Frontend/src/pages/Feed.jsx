import React from 'react'
import Ideas from './Ideas';
import Posts from './Posts';
import ProfileSide from '../components/ProfileSide';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import WysiwygOutlinedIcon from '@mui/icons-material/WysiwygOutlined';
import { Tabs } from 'antd';
const onChange = (key) => {
  console.log(key);
};

const items = [
  {
    key: '1',
    label: (
      <div className="flex items-center ">
        <EmojiObjectsOutlinedIcon className="mr-5" sx={{color: "rgb(5, 190, 250)"}}  />
        Ideas
      </div>
    ),
    children: <Ideas />,
  },
  {
    key: '2',
    label: (
      <div className="flex items-center">
        <WysiwygOutlinedIcon className="mr-5" sx={{color: "rgb(5, 190, 250)"}} />
        Posts
      </div>
    ),
    children: <Posts />,
  },
];
export default function Feed() {
  return (
<div className='flex'>
<Tabs defaultActiveKey="1"  centered items={items} onChange={onChange} className='shrink w-[1000px]' />;
<ProfileSide className="shrink w-[500px]" />

</div>
    )
}
