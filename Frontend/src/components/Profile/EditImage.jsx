import React, { useRef } from 'react';

const YourComponent = () => {
  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    // Trigger the file input click event
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      // Handle the file selection here
      // For example, you can use FileReader to read the file and set it as the image source
      const reader = new FileReader();

      reader.onloadend = () => {
        // Set the image source with the result
        // setImageSrc(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <button
        onClick={handleImageClick}
        className="absolute top-[160px] left-[calc(50%_-_397px)] rounded-[50%] w-[170px] h-[170px] object-cover z-[2]"
      >
        <img
          src="/path-to-default-image.png"
          alt=""
          className="w-full h-full rounded-[50%] object-cover"
        />
      </button>

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleImageChange}
      />
    </div>
  );
};

export default YourComponent;
