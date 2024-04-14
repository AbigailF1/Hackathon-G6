import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { Button, Modal } from "antd";
import { Input } from "antd";





// class Profile(models.Model):
//     # user = models.OneToOneField("User", on_delete=models.CASCADE, related_name='profile')
//     user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='profile')
//     bio = models.TextField()
//     image = models.ImageField(upload_to="user",)
//     resume_link = models.URLField(blank=True, null=True)
//     skills = models.ManyToManyField('Skill')
//     educations = models.ManyToManyField('Education')
//     expriences = models.ManyToManyField('Experience')
//     projects = models.ManyToManyField('Project')

//     def __str__(self):
//         return self.user.username
const MyComponent = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [image ,setImage] = useState(null);
  

  const handleEditClick = () => {
    
    console.log("Edit button clicked");
    setIsModalOpen(true); 
  };

  const handleOk = () => {
   
    console.log("OK button clicked");
    setIsModalOpen(false); 
  };

  const handleCancel = () => {
    
    console.log("Cancel button clicked");
    setIsModalOpen(false); 
  };

  return (
    <div>
      <button onClick={handleEditClick} style={{alignSelf: "end"}}>
        <FiEdit />
      </button>
      <Modal
        className="header:text-center"
        title="Edit Projects"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="flex flex-col gap-1 py-1">
          <label className="text-start" htmlFor="">
            Profile Name
          </label>
          <Input className="w-full" placeholder="Profile Name" />
        </div>
        <div className="flex flex-col gap-1 py-1">
          <label className="text-start" htmlFor="">
            Detail
          </label>
          <Input className="w-full" placeholder="Detail" />
        </div>
        <div className="flex flex-col gap-1 py-1">
          <label className="text-start" htmlFor="">
            Location 
          </label>
          <Input className="w-full" placeholder="Location " />
        </div>
      </Modal>
    </div>
  );
};

export default MyComponent;
