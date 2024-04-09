
import NotificationSideBar from '../components/Notification/NotificationSideBar'
import Notification from "../components/Notification/Notification";
import   '../components/Notification/Notification.css'

function Notifications() {
  return (
    <div className='notification'>
     <NotificationSideBar/>
     <Notification/>
    </div>
  )
}

export default Notifications
