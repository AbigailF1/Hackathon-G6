import React from 'react'
import { useNavigate } from "react-router-dom";
import { Card, Avatar, Text } from '@mantine/core';

export default function Profile() {
  const navigate = useNavigate();
  
  function handleProfile(){
     navigate('/Profile')
  }
  return (
    <div className="cursor-pointer" onClick={handleProfile}>
         <Card withBorder radius="md" w={290} mx="auto" my={15} > 
      <Card.Section
        h={120}
        style={{
          backgroundImage:
            'url("../src/assets/img.jpg")',
            backgroundSize: "cover",
            objectFit: "fill"        }}
      />
      <Avatar
        src="../src/assets/react.svg"
        size={80}
        radius={80}
        mx="auto"
        mt={-30}
      />
      <Text ta="center" fz="lg" fw={500} mt="sm">
        Bill Headbanger
      </Text>
      <Text ta="center" fz="sm" c="dimmed">
        Fullstack engineer
      </Text>
      <Text ta="center" fz="sm" mt="md" >
        This is description        This is description
        This is description
        This is description
        This is description
        This is description

      </Text>
    
    </Card>
    </div>
  )
}
