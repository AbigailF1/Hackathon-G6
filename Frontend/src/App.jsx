import { useState } from "react";

//react router dom



import Notifications from './pages/Notifications';
import  Post from './pages/Posts';
import Feed from './pages/Feed';
import Chat from './pages/Chat';
import Collaborate from './pages/Collaborate';
import Header from './components/Header (2)';
import SentConnection from './components/Connections/SentConnection';
import{ createBrowserRouter, RouterProvider, createRoutesFromElements, Outlet, Route, useLocation,}from 'react-router-dom'
import '@mantine/core/styles.css';
import "./App.css";
import Home from "./pages/Landing";
import Favorites from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ProfilePage from "./pages/ProfilePage";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { SearchResultsList } from "./components/SearchBar/SearchResultList";
import Landing from './pages/Landing';
import Footer from "./components/Footer/Footer";

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
        <Route path="/Feed" element={<Feed />} />
        <Route path="/Profile" element={<ProfilePage />} />
        <Route path="/Search" element = {<SearchBar/>}/>
        <Route path="/Landing" element = {<Landing/>}/>
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
      {/* {isHeaderVisible && <Footer /> } */}
    </>
  );
};
