import { Avatar, Card } from 'antd';
import { Flex, Tag } from 'antd';
import Profile from './Profile';
const { Meta } = Card;
const gridStyle = {
  width: '25%',
  textAlign: 'center',
};
export default function ProfileSide() {
  return (
    
    <section className='mt-14 flex flex-col gap-5 mr mr-24'>
      <Profile />

  <div className="w-[350px] rounded-lg bg-slate-100 shadow-sm py-8 flex flex-col gap-4 justify-center pl-6">  
     <h4 className='text-center text-black font-bold m-4'>My Groups</h4>  
      <Card
          className="my-card shrink"
          style={{
            width: 300,
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
        <Card
          className="my-card shrink"
          style={{
            width: 300,
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
            title="Digital freelancers group"
          />
        </Card>
        <Card
          className="my-card shrink"
          style={{
            width: 300,
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
            title="Interaction design association"
          />
        </Card>
      </div>

  <div className='m-auto shadow-md bg-slate-100 rounded p-7 gap-2 mb-16'>
    <div className='m-auto text-black'>FOLLOWED TAGS</div>
    <div className='grid grid-cols-4 gap-5 pt-5'>
    <Tag bordered={false} closable  color='gray'>
        Tag
      </Tag>
      <Tag bordered={false} closable color='gray'>
        Tag
      </Tag> <Tag bordered={false} closable color='gray'>
        Tag
      </Tag> <Tag bordered={false} closable color='gray'>
        Tag
      </Tag> <Tag bordered={false} closable color='gray'>
        Tag
      </Tag> <Tag bordered={false} closable color='gray'>
        Tag
      </Tag> <Tag bordered={false} closable color='gray'>
        Tag
      </Tag> <Tag bordered={false} closable color='gray'>
        Tag
      </Tag> <Tag bordered={false} closable color='gray'>
        Tag
      </Tag> <Tag bordered={false} closable color='gray'>
        Tag
      </Tag> <Tag bordered={false} closable color='gray'>
        Tag
      </Tag> <Tag bordered={false} closable color='gray'>
        Tag
      </Tag> <Tag bordered={false} closable color='gray'>
        Tag
      </Tag> <Tag bordered={false} closable color='gray'>
        Tag
      </Tag>
    </div>
  </div>


</section>
  );
}


