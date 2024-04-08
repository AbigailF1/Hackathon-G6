import React from 'react'
import { Avatar, Card } from 'antd';
import { Flex, Tag } from 'antd';
const { Meta } = Card;

export default function GroupCard() {

  return (
    <div>
        <Card
          className="my-card shrink"
          style={{
            width: 290,
            backgroundColor: 'white',
            borderRadius: '10px',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
        >
          <Meta
            avatar={
              <Avatar
                src="../src/assets/react.svg"
              />
            }
            title="Moscow State Linguistical University"
          />
        </Card>
    </div>
  )
}
