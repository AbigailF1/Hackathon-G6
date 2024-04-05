import React from 'react'
import { Card, Avatar, Text, Group, Button } from '@mantine/core';

export default function Profile() {
  return (
    <div>
         <Card withBorder radius="md" w={300} mx="auto" my={15} > 
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
