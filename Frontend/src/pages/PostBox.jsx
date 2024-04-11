// /* eslint-disable react/prop-types */
// import React, { useState } from "react";
// import { Modal } from "antd";
// import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
// import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
// import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
// import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';
// // eslint-disable-next-line react/prop-types
// export default function IdeaBox({ data }) {
//   const [liked, setLiked] = useState(false);
//   function toggleFav() {
//     setLiked((prev) => !prev);
//   }

//   const [open, setOpen] = useState(false);
//   const showModal = () => {
//     setOpen(true);
//   };
//   function handleComment(event) {
//     event.preventDefault();
//     console.log("You clicked the button");
//     setComment(event.target.value);
//     console.log("com", comment);
//     setOpen(false);
//   }
//   const handleCancel = () => {
//     console.log("Clicked cancel button");
//     setOpen(false);
//   };
//   const [comment, setComment] = useState("");
//   function change(event) {
//     setComment(event.target.value);
//   }
//   console.log(data);
//   return (
//     <>
//       {/* <h1>PostBox</h1> */}
//       {data?.map((person) => (
//         // eslint-disable-next-line react/jsx-key
//         <div className="flex flex-col m-5 pt-2.5 bg-white rounded max-w-[850px]">
//           <div className="flex items-center gap-2">
//             <div className="avatar mx-2 mb-2">
//               <div className="w-12 rounded">
//                 <img
//                   src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
//                   alt="Tailwind-CSS-Avatar-component"
//                 />
//               </div>
//             </div>
//             <div className="flex flex-col gap-0">
//               <div
//                 className="text-black text-center font-semibold"
//                 style={{ fontFamily: "Adamina" }}
//               >
//                 {/* {person.name} */}
//               </div>
//               <div
//                 className="text-xs text-gray-500"
//                 style={{ fontFamily: "Adamina" }}
//               >
//                 <p>{person.user.username}</p>
//               </div>
//             </div>
//           </div>
//           <div className="mt-2.5 w-full border border-solid bg-zinc-100 border-zinc-100 min-h-[1px] max-md:max-w-full" />
//           <div className="p-5" style={{ fontFamily: "Adamina" }}>
//             {person.feed.feedText}
//           </div>
//           {person.feed.image != null ? (
//             <div className="border border-solid border-zinc-100">
//               <img
//                 src={`http://127.0.0.1:8000/${person.feed.image}`}
//                 alt=""
//                 className="h-auto max-w-lg rounded-lg w-full m-auto"
//               />
//             </div>
//           ) : (
//             " "
//           )}
//           <div className="mt-2.5 w-full border border-solid bg-zinc-100 border-zinc-100 min-h-[1px] max-md:max-w-full" />
//           <div className=" flex gap-16 m-5">
//             {liked ? (
//               <FavoriteOutlinedIcon sx={{ color: "red" }} onClick={toggleFav} />
//             ) : (
//               <FavoriteBorderOutlinedIcon onClick={toggleFav} />
//             )}
//             <AddCommentOutlinedIcon onClick={showModal} />

//             <Modal
//               title="Comment"
//               style={{ display: "flex", alignItems: "center", width: "100%" }}
//               open={open}
//               onOk={handleComment}
//               onCancel={handleCancel}
//             >
//               <textarea
//                 type="text"
//                 className="py-4 w-full border rounded resize-none bg-slate-100 p-2 "
//                 rows="2"
//                 style={{ width: "600px" }}
//                 placeholder="comment..."
//                 value={comment}
//                 onChange={change}
//               />
//             </Modal>
//             <TextsmsOutlinedIcon />
//           </div>
//         </div>
//       ))}
//     </>
//   );
// }
import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import Comments from './Comments';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';
const { Option } = Select;
const App = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
        New account
      </Button>
      <Drawer
        title="Comments"
        width={720}
        onClose={onClose}
        open={open}
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={onClose} type="primary">
              Submit
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={12}>
              {/* <Form.Item
                name="name"
                label="Name"
                rules={[
                  {
                    required: true,
                    message: 'Please enter user name',
                  },
                ]}
              >
                <Input placeholder="Please enter user name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="url"
                label="Url"
                rules={[
                  {
                    required: true,
                    message: 'Please enter url',
                  },
                ]}
              >
                <Input
                  style={{
                    width: '100%',
                  }}
                  addonBefore="http://"
                  addonAfter=".com"
                  placeholder="Please enter url"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="owner"
                label="Owner"
                rules={[
                  {
                    required: true,
                    message: 'Please select an owner',
                  },
                ]}
              >
                <Select placeholder="Please select an owner">
                  <Option value="xiao">Xiaoxiao Fu</Option>
                  <Option value="mao">Maomao Zhou</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="type"
                label="Type"
                rules={[
                  {
                    required: true,
                    message: 'Please choose the type',
                  },
                ]}
              >
                <Select placeholder="Please choose the type">
                  <Option value="private">Private</Option>
                  <Option value="public">Public</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="approver"
                label="Approver"
                rules={[
                  {
                    required: true,
                    message: 'Please choose the approver',
                  },
                ]}
              >
                <Select placeholder="Please choose the approver">
                  <Option value="jack">Jack Ma</Option>
                  <Option value="tom">Tom Liu</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="dateTime"
                label="DateTime"
                rules={[
                  {
                    required: true,
                    message: 'Please choose the dateTime',
                  },
                ]}
              >
                <DatePicker.RangePicker
                  style={{
                    width: '100%',
                  }}
                  getPopupContainer={(trigger) => trigger.parentElement}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="description"
                label="Description"
                rules={[
                  {
                    required: true,
                    message: 'please enter url description',
                  },
                ]}
              >
                <Input.TextArea rows={4} placeholder="please enter url description" />
              </Form.Item>*/}
              <Comments />
            </Col>
          </Row> 
        </Form>
      </Drawer>
    </>
  );
};
export default App;