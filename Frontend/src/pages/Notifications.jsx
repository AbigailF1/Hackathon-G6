
import NotificationSideBar from '../components/Notification/NotificationSideBar'
import Notification from "../components/Notification/Notification";
import   '../components/Notification/Notification.css'
import ProfileHeader from '../components/Header/ProfileHeader';
import Footer from '../components/Footer/Footer';

function Notifications() {
  return (
    <>
      <div>
        <ProfileHeader />
      </div>
      <div className="notification">
        <NotificationSideBar />
        <Notification />
      </div>
      <div>
        {" "}
        <Footer />
      </div>
    </>
  );
}

export default Notifications
