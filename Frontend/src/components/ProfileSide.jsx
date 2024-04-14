import { Avatar, Card } from 'antd';
import { Flex, Tag } from 'antd';

import Profile from './Profile';
import axios from 'axios';
import { useEffect, useState } from 'react';
const { Meta } = Card;
const gridStyle = {
  width: '25%',
  textAlign: 'center',
};
export default function ProfileSide() {
  const [tags,setTags]=useState(null);

   useEffect(() => {
     // Define an async function to fetch data
     const fetchData = async () => {
       try {
         // Make the HTTP request using Axios
         const token = localStorage.getItem("token"); // Retrieve token from local storage
         const response = await axios.get(
           "https://hackathon-g6.onrender.com/api/list-tags/",
           {
             headers: {
               Authorization: `Bearer ${token}`, // Include token in the request headers
             },
           }
         );
         // Extract the data from the response
         const data = response.data;

         // Set the fetched data to the state
         setTags(data);
         // Log the data to the console
         console.log(data);
       } catch (error) {
         console.log(error);
         // Log any errors to the console
         console.error("There was a problem fetching the data:", error.message);
       }
     };

     // Call the async function to fetch data when the component mounts
     fetchData();
   }, []); // E
   console.log(tags);




  return (
    <section className="mt-14 flex flex-col gap-5 mr-16">
      <Profile />

      <div className="w-[350px] rounded-lg bg-slate-100 shadow-sm py-8 flex flex-col gap-4 justify-center pl-6">
        <h4 className="text-center text-black font-bold m-4">My Groups</h4>
        <Card
          className="my-card shrink"
          style={{
            width: 300,
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          }}
          cover={
            <img
            className="w-[300px] h-[200px]"
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
        >
          <Meta
            avatar={<Avatar src="../src/assets/react.svg" />}
            title="Moscow State Linguistical University"
          />
        </Card>
        <Card
          className="my-card shrink"
          style={{
            width: 300,
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
        >
          <Meta
            avatar={<Avatar src="../src/assets/react.svg" />}
            title="Digital freelancers group"
          />
        </Card>
        <Card
          className="my-card shrink"
          style={{
            width: 300,
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
        >
          <Meta
            avatar={<Avatar src="../src/assets/react.svg" />}
            title="Interaction design association"
          />
        </Card>
      </div>
      <div className="m-auto shadow-md bg-slate-100 rounded p-7 gap-2 mb-16">
        <div className="m-auto text-black">FOLLOWED TAGS</div>
        <div className="grid grid-cols-4 gap-5 pt-5">
          {tags?.map((tag) => (
            <Tag key={tag.id} bordered={false} closable color="gray">
              {tag.tag_title}
            </Tag>
          ))}
        </div>
      </div>
    </section>
  );
}


