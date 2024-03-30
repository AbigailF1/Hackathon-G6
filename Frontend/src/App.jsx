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
import Favorites from './pages/Ho';
import Login from './pages/Login';
import Notification from './pages/Notification';
import  Post from './pages/Post';
import Chat from './pages/Chat';
import Collaborate from './pages/Collaborate';
import Idea from './pages/Idea';
import Header from './components/Header (2)';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
       <Route path='/' element={<Root />} >
        <Route index element={<Home />} />
        <Route path="/Login" element = {<Login/>} />
        <Route path="/Collaborate" element = {<Collaborate/>} />
        <Route path="/Idea" element = {<Idea/>} />
        <Route path="/Post" element = {<Post/>} />
        <Route path="/Notification" element = {<Notification/>} />
        <Route path="/Chat" element = {<Chat/>} />

      </Route>
    )
  )
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
