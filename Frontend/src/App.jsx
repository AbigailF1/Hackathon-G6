import { useState } from "react";

//react router dom


import{ createBrowserRouter, RouterProvider, createRoutesFromElements, Outlet, Route, useLocation,}from 'react-router-dom'
import '@mantine/core/styles.css';


import "./App.css";
import Home from "./pages/Landing";
import Favorites from "./pages/Home";
import Login from "./pages/Login";

import Notifications from "./pages/Notifications";
//import  Post from './pages/Post';
import Post from "./pages/Posts";
import Feed from "./pages/Feed";
import Chat from "./pages/Chat";
import Collaborate from "./pages/Collaborate";
import Idea from "./pages/Ideas";
import Header from "./components/Header (2)";
import SentConnection from "./components/Connections/SentConnection";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ProfilePage from "./pages/ProfilePage";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { SearchResultsList } from "./components/SearchBar/SearchResultList";

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
        <Route path="/Idea" element={<Idea />} />
        <Route path="/Post" element={<Post />} />
        <Route path="/Notifications" element={<Notifications />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Collaborate" element={<Collaborate />} />
        <Route path="/Feed" element={<Feed />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/Profile" element={<ProfilePage />} />
        <Route path="/Search" element = {<SearchBar/>}/>
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
    "/",
    "/Collaborate",
    "/SentConnection",
    "/Idea",
    "/Post",
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
      {isHeaderVisible && <Header />}
      <div>
        <Outlet />
      </div>
      
    </>
  );
};
