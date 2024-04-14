
//react router dom



import Notifications from './pages/Notifications';
import Feed from './pages/Feed';
import Chat from './pages/Chat';
import Collaborate from './pages/Collaborate';
import SentConnection from './components/Connections/SentConnection';
import{ createBrowserRouter, RouterProvider, createRoutesFromElements, Outlet, Route, useLocation,}from 'react-router-dom'
import '@mantine/core/styles.css';
import "./App.css";
import Home from "./pages/Landing";
// import Favorites from "./pages/Home";
import Login from "./pages/Login";
import Terms from "./pages/Footer_pages/Terms";
import Header from './components/Header (2)';

//import  Post from './pages/Post';



import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ProfilePage from "./pages/ProfilePage";
import { SearchBar } from "./components/SearchBar/SearchBar";
// import { SearchResultsList } from "./components/SearchBar/SearchResultList";
import Landing from './pages/Landing';
import Footer from "./components/Footer/Footer";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import ProfileList from "./pages/ProfileList";
import Privacy from "./pages/Footer_pages/Privacy";
import Goals from "./pages/Footer_pages/Goals";
import CommunityGuidelines from "./pages/Footer_pages/CommunityGuidelines";
import Visions from "./pages/Footer_pages/Visions";
import Testimonials from "./components/Land/Testimonial";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />

        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Forgot" element={<ForgotPassword />} />
        <Route path="/Collaborate" element={<Collaborate />} />
        <Route path="/SentConnection" element={<SentConnection />} />
        <Route path="/Notifications" element={<Notifications />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path='/Guidelines' element={<CommunityGuidelines />} />
        <Route path='/Visions' element={<Visions />} />
        <Route path='/About' element={<Testimonials />} />
        <Route path="/Privacy" element={<Privacy/>}/>
        <Route path='/Terms' element={<Terms />} />
        <Route path="/Feed" element={<Feed />} />
        <Route path='/Goals' element={<Goals />} />
        <Route path="/Profile" element={<ProfilePage />} />
        <Route path="/Search" element = {<SearchBar/>}/>
        <Route path="/Landing" element = {<Landing/>}/>
        <Route path="/Skill" element = {<Skills/>}/>
        <Route path="/Education" element ={<Education/>}/>
        <Route path="/ProfileList" element={<ProfileList/>}/>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
    
  );
}
export default App;

const Root = () => {
  const location = useLocation();
  const headerVisiblePaths = [
    "/Collaborate",
    "/SentConnection",
    "/Notifications",
    "/Chat",
    "/Collaborate",
    "/Feed",
    "/Chat",
    "/Profile",
  ];
  const isHeaderVisible = headerVisiblePaths.includes(location.pathname);
  return (
    <>
      {isHeaderVisible && <Header /> }
      <div>
        <Outlet />
      </div>
      {isHeaderVisible && <Footer /> }
    </>
  );
};
