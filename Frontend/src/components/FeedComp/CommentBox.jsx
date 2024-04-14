import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function CommentBox({ feedId }) {
  const [commentData, setCommentData] = useState(null); // State to hold comment data
  const [loading, setLoading] = useState(true); // Loading state
  const token = localStorage.getItem('token');
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch comment data from API
        const response = await axios.get(`https://hackathon-g6.onrender.com/api/feeds/${feedId}/comments/`, config);
        // Set comment data in state
        setCommentData(response.data);
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error('Error fetching comment data:', error);
      }
    };

    fetchData(); // Call the fetchData function
  }, [feedId]); // Fetch data whenever feedId changes

  return (
    <div className="flex flex-col flex-wrap m-5 md:shrink-0 pt-2.5 bg-white rounded w-[280px] overflow-x-hidden">
      {loading ? (
        // Render a loading indicator while data is being fetched
        <p>Loading comments...</p>
      ) : (
        // Render comment data once it's available
        <>
          {commentData.length === 0 ? (
            // Render "No comments" text when there are no comments
            <p className="text-center">No comments</p>
          ) : (
            // Render comments when there are comments available
            commentData.map((comment) => (
              <div key={comment.id}>
                <div className="flex items-center gap-2">
                  <div className="avatar mx-2 mb-2">
                    <div className="w-12 rounded">
                      <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Avatar" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-0">
                    <div className="text-black text-center font-semibold" style={{ fontFamily: 'Adamina' }}>
                      {comment.user.username}
                    </div>
                    <div className="text-xs text-gray-500" style={{ fontFamily: 'Adamina' }}>
                      {/* Assuming position data is available in comment */}
                      {comment.user.position}
                    </div>
                  </div>
                </div>
                <div className="mt-2.5 w-full border border-solid bg-zinc-100 border-zinc-100 min-h-[1px] max-md:max-w-full" />
                <div className="p-5 text-black w-96" style={{ fontFamily: 'Adamina' }}>
                  {comment.text_content}
                </div>
              </div>
            ))
          )}
        </>
      )}
    </div>
  );
}