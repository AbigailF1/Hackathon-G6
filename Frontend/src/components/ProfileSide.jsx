import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;
const gridStyle = {
  width: '25%',
  textAlign: 'center',
};
export default function ProfileSide() {
  return (
    
    <section className="right-0 top-1 absolute left-[80%] flex flex-col gap-14">
     <Card
    style={{
      width: 300,
    }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
  >
    <Meta
      avatar={<Avatar         src = "../src/assets/react.svg"
      />}
      title="User name"
      description="This is the description"
    />
  </Card>

  <div className="w-[350px] bg-slate-100 rounded-lg shadow-sm py-8 flex flex-col gap-4 justify-center pl-6">  
     <h4 className='text-center font-bold m-4'>My Groups</h4>  
      <Card
          className="my-card"
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
          className="my-card"
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
          className="my-card"
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

      <Card title="Followed Tags"
      style={{
        width: 300,
        backgroundColor: 'white',
        borderRadius: '10px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      }}>
    <Card.Grid style={gridStyle}>#tag</Card.Grid>
    <Card.Grid hoverable={false} style={gridStyle}>
      #tag
    </Card.Grid>
    <Card.Grid style={gridStyle}>#tag</Card.Grid>
    <Card.Grid style={gridStyle}>#tag</Card.Grid>
    <Card.Grid style={gridStyle}>#tag</Card.Grid>
    <Card.Grid style={gridStyle}>#tag</Card.Grid>
    <Card.Grid style={gridStyle}>#tag</Card.Grid>
  </Card>


</section>
  );
}


