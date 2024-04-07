import React from 'react'
import "./NotificationSideBar.css";

function NotificationSideBar() {
  return (
    <div className="NotificationSideBar">
      <div className='dashboard'>
        <h4>YOUR DASHBOARD</h4>
        <span className='stats'>GO TO STATS</span>
      </div>
      <div>
        <div>
          <p>367</p>
          <span>Likes</span>
        </div>
        <div>
          <p>15</p>
          <span>Post Feed </span>
        </div>
        <div>
          <p>9</p>
          <span>Idea Feed</span>
        </div>
      </div>
    </div>
  );
}

export default NotificationSideBar
