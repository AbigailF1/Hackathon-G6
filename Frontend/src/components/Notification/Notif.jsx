import { RingProgress, Text, SimpleGrid, Paper, Center, Group, rem } from '@mantine/core';
import { IconArrowUpRight, IconArrowDownRight } from '@tabler/icons-react';
import React, { useEffect, useState } from "react";
import "./NotificationSideBar.css";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
const token = localStorage.getItem("token"); // Retrieve token from local storage
const decoded = jwtDecode(token);

const icons = {
  up: IconArrowUpRight,
  down: IconArrowDownRight,
};

export function Notif() {
   
  const [likes, setLikes] = useState(0);
  const [postFeed, setPostFeed] = useState(0);
  const [ideaFeed, setIdeaFeed] = useState(0);


  useEffect(() => {
    // Define an async function to fetch data
    const fetchLike = async () => {
      try {
        // Make the HTTP request using Axios
        
        const response = await axios.get(
          `https://hackathon-g6.onrender.com/api/user/${decoded.user_id}/likes/`,
          // user/<int:user_id>/likes/
          {
            headers: {
              Authorization: `Bearer ${token}`, // Include token in the request headers
            },
          }
        );
        // Extract the data from the response
        const data = response.data;
        console.log("***like***", data);
        // Set the fetched data to the state
        setLikes(data.likes);
      } catch (error) {
        console.log("xxxxLIKE***",error);
        console.error("There was a problem fetching the data:", error.message);
      }
    };


    const fetchPostFeed = async () => {
      try {
        // Make the HTTP request using Axios
        const token = localStorage.getItem("token"); // Retrieve token from local storage
        const response = await axios.get(
          `https://hackathon-g6.onrender.com/api/user/${decoded.user_id}/post-feeds-count/`,
          // 'user/<int:user_id>/post-feeds-count/'

          {
            headers: {
              Authorization: `Bearer ${token}`, // Include token in the request headers
            },
          }
        );
        // Extract the data from the response
        const data = response.data;
        console.log("***post feed***", data);
        // Set the fetched data to the state
        setPostFeed(data.post_feeds_count);
      } catch (error) {
        console.log(error);

        console.error("There was a problem fetching the data:", error.message);
      }
    };
    const fetchIdeaFeed = async () => {
      try {
        // Make the HTTP request using Axios
        const token = localStorage.getItem("token"); // Retrieve token from local storage
        const response = await axios.get(
          `https://hackathon-g6.onrender.com/api/user/${decoded.user_id}/idea-feeds-count/`,
          // user/<int:user_id>/idea-feeds-count/</int:user_id>
          {
            headers: {
              Authorization: `Bearer ${token}`, // Include token in the request headers
            },
          }
        );
        // Extract the data from the response
        const data = response.data;
        console.log("***idea feed***", data);
        // Set the fetched data to the state
        setIdeaFeed(data.idea_feeds_count);
      } catch (error) {
        console.log(error);

        console.error("There was a problem fetching the data:", error.message);
      }
    };


    // Call the async function to fetch data when the component mounts
    fetchLike();
    fetchIdeaFeed();
    fetchPostFeed();
  }, []);
  const data = [
    { label: 'Likes', stats: `${likes}`, progress: 0, color: 'teal', icon: 'up' },
    { label: 'Post Feed', stats: `${postFeed}`, progress: 6, color: 'blue', icon: 'up' },
    {
      label: 'Idea Feed',
      stats: `${ideaFeed}`, 
      progress: 8,
      color: 'red',
      icon: 'down',
    },
  ];
  const stats = data.map((stat) => {
    const Icon = icons[stat.icon];
    
    return (
        <div className=' my-32'>
      <Paper withBorder radius="md" p="sm" key={stat.label}>
        <Group>
          <RingProgress
            size={180}
            roundCaps
            thickness={8}
            sections={[{ value: stat.progress, color: stat.color }]}
            label={
              <Center>
                <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
              </Center>
            }
          />

          <div>
            <Text c="dimmed" size="xs" tt="uppercase" fw={700}>
              {stat.label}
            </Text>
            <Text fw={700} size="xl">
              {stat.stats}
            </Text>
          </div>
        </Group>
      </Paper>
      </div>
    );
  });

  return <SimpleGrid cols={{ base: 1, sm: 3 }}>{stats}</SimpleGrid>;
}
