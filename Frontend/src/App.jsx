import { useState } from 'react'

//react router dom
import{
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Outlet,
  Route
}from 'react-router-dom'

import Home from './pages/Landing';
import Favorites from './pages/Home';
import Login from './pages/Login';

import Notifications from './pages/Notifications';
//import  Post from './pages/Post';
import  Post from './pages/Posts';
import Feed from './pages/Feed';
import Chat from './pages/Chat';
import Collaborate from './pages/Collaborate';
import Idea from './pages/Ideas';
import Header from './components/Header (2)';
import SentConnection from './components/Connections/SentConnection';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />

        <Route path="/Login" element={<Login />} />
        <Route path="/Collaborate" element={<Collaborate />} />
        <Route path="/SentConnection" element={<SentConnection />} />
        <Route path="/Idea" element={<Idea />} />
        <Route path="/Post" element={<Post />} />
        <Route path="/Notifications" element={<Notifications />} />
        <Route path="/Chat" element={<Chat />} />

        <Route path="/Login" element = {<Login/>} />
        <Route path="/Collaborate" element = {<Collaborate/>} />
        <Route path="/Feed" element = {<Feed/>} />
        <Route path="/Chat" element = {<Chat/>} />


      </Route>
    )
  );
  return (
    <>
        <RouterProvider router={router}/>
    </>
  )
}
export default App;

  const Root=()=>{
    return(
      <>
      <div><Header/></div> 
      <div><Outlet/></div>
      </>
    )
  }
