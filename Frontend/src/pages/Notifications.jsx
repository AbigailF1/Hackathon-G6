
import NotificationSideBar from '../components/Notification/NotificationSideBar'
import Notification from "../components/Notification/Notification";
import   '../components/Notification/Notification.css'
import ProfileHeader from '../components/Header/ProfileHeader';
import Footer from '../components/Footer/Footer';
import { Notif } from '../components/Notification/Notif';

function Notifications() {
  return (
    <>
      <div>
        <ProfileHeader />
      </div>
      <h2 className='text-center font-serif font-semibold text-2xl mt-24'>Dashboard</h2>
      <div className="notification">
        <Notif/>
        {/* <Notification /> */}
      </div>
      <div>
        {" "}
        <Footer />
      </div>
    </>
  );
}

export default Notifications
