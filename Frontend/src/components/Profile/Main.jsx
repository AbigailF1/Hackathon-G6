// import { FiEdit } from "react-icons/fi";
import { Button, Modal, Input } from "antd";
import { useState } from "react";
import EditMain from "./EditMain";
import EditImage from "./EditImage";
import axios from "axios";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import { jwtDecode } from "jwt-decode";

const EditName = () => {
  const [image, setImage] = useState(null);
  const [post, setPost] = useState("");
  const handleImageInputChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleEditClick = () => {
    console.log("Edit button clicked");
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    console.log("Cancel button clicked");
    setIsModalOpen(false);
  };
  const handleOk = async (event) => {
    console.log("OK button clicked");
    // Send POST request using Axios
    //  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append("bio", post);
      formData.append("user", jwtDecode(localStorage.getItem("token")).user_id);

      if (image !== null) {
        formData.append("image", image);
      }

      const token = localStorage.getItem("token");
      const response = await axios.post(
        `http://127.0.0.1:8000/api/users/profile/`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);

      setPost("");
      setImage(null);
      //  setSelectedImage(null);
    } catch (error) {
      console.error(error);
    }
    //  };
  };

  return (
    <div className="h-[360px] flex-1 relative rounded bg-white shadow-[0px_20px_60px_rgba(241,_245,_248,_0.5)] min-w-[556px] max-w-full mq450:h-auto mq450:min-h-[360] mq750:min-w-full">
      <div className="absolute top-[0px] left-[calc(50%_-_428px)] rounded bg-white shadow-[0px_20px_60px_rgba(241,_245,_248,_0.5)] w-full h-full hidden" />
      <EditImage />
      <h3 className="m-0 absolute top-[205px] left-[calc(50%_-_202px)] text-inherit  text-black font-normal font-inherit inline-block min-w-[127px] z-[1]">
        Yeabsera
        {/* {profiledata.name} */}
      </h3>
      <div className="absolute top-[237px] left-[calc(50%_-_202px)] text-sm leading-[150%] whitespace-pre-wrap inline-block w-[583px] z-[1]">{`Freelance UX/UI designer, 80+ projects in web design, mobile apps  (iOS & android) and creative projects. Open to offers.`}</div>

      <button className="cursor-pointer [border:none] pt-[11px] px-[34px] pb-[5px] bg-[transparent] absolute top-[293px] left-[calc(50%_-_202px)] rounded [background:linear-gradient(180deg,_#0077b5,_#0e6795)] flex flex-row items-start justify-start whitespace-nowrap z-[1]">
        <div className="h-8 w-[170px] relative rounded [background:linear-gradient(180deg,_#0077b5,_#0e6795)] hidden" />
        <Modal
          className="header:text-center"
          title="Add About"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <div className="flex flex-col gap-1 py-1">
            <label className="text-start" htmlFor="">
              Project Name
            </label>
            {/* <Input className="w-full" placeholder="Project Name" /> */}
          </div>
          <div className="flex flex-col gap-1 py-1">
            <label className="text-start" htmlFor="">
              Detail
            </label>
            <Input
              value={post}
              onChange={(e) => setPost(e.target.value)}
              className="w-full"
              placeholder="Detail"
            />
          </div>
          <div className="flex flex-col gap-1 py-1">
            <label htmlFor="imageInput">
              <ImageOutlinedIcon sx={{ color: "gray", cursor: "pointer" }} />
            </label>
            <input
              type="file"
              accept="image/*"
              id="imageInput"
              style={{ display: "none" }}
              onChange={handleImageInputChange}
            />
          </div>
        </Modal>
        <div
          onClick={handleEditClick}
          className="w-[102px] relative text-xs uppercase  text-black font-adamin  text-center inline-block min-w-[102px] z-[1]"
        >
          Edit Profile
        </div>
      </button>
      <div className="absolute top-[0px]  w-full flex flex-row items-start justify-between py-5 px-[30px] box-border bg-[url('/public/bg.jpg')] bg-cover bg-no-repeat bg-[top] min-h-[180px] gap-[20px] max-w-full z-[1] mq450:flex-wrap">
        <EditMain />
        <img
          className="w-[850px] relative max-h-full object-cover hidden max-w-full"
          alt=""
          src="/rectangle-3@2x.png"
        />
        <div className="w-[178px] flex flex-row items-start justify-start gap-[10px]"></div>
      </div>
      <div className="absolute top-[206px] left-[606px] text-sm md:text-xs lg:text-sm xl:text-xs leading-normal md:leading-[150%] lg:leading-normal xl:leading-[150%] z-[1]">
        Addis Ababa, Ethiopia
      </div>
      <img
        className="absolute top-[207px] left-[582px] w-4 h-4 overflow-hidden z-[1]"
        alt=""
        src="/navigation.svg"
      />
    </div>
  );
};

export default EditName;
