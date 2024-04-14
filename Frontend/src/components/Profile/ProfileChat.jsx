import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';  // Import jwtDecode correctly

const ProfileChat = () => {
    const token = localStorage.getItem("token");
    const decoded = jwtDecode(token);

    console.log(decoded.user_id);

    const [profileData, setProfileData] = useState(null);
    const [isChatVisible, setIsChatVisible] = useState(false);

    const toggleChatVisibility = () => {
        setIsChatVisible(!isChatVisible);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await axios.get(
                    `http://127.0.0.1:8000/api/profiles/${decoded.user_id}/user/`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`, // Correct string interpolation
                        },
                    }
                );
                const data = response.data;
                setProfileData(data);
                console.log(data);
            } catch (error) {
                console.error("There was a problem fetching the data:", error.message);
                // Handle error more gracefully, maybe set an error state
            }
        };

        fetchData();
    }, [decoded.user_id]); 

    console.log(profileData); 

    return (
        <div>
            <div className="fixed margin-top-30 right-0 mb-4 mr-0 w-full h-">
                {isChatVisible && <Chat />}
            </div>
            <div className="h-14 w-14 fixed right-0 top-[500px]  flex items-center justify-center ">
                <img
                    className="h-full chat cursor-pointer w-full z-[6] object-contain absolute left-[-23px] top-[3px] [transform:scale(2.632)]"
                    loading="lazy"
                    alt=""
                    src="/chat@2x.png"
                    onClick={toggleChatVisibility}
                />
            </div>
        </div>
    );
};

export default ProfileChat;
