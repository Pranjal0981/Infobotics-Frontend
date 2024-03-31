import { useState } from 'react';
import { Navbar } from './components/Navbar';
import Home from './components/Home';
import LatestPost from './components/LatestPost';
import Footer from './components/Footer';
import { Route, Routes, Navigate } from 'react-router-dom';
import Signin from './components/Auth/Signin';
import Signup from './components/Auth/Signup';
import ForgetPassword from './components/Auth/ForgetPassword';
import Profile from './components/Profile';
import UpdateProfile from './components/Updateprofile';
import { useSelector } from 'react-redux';
import ResetPassword from './components/Auth/ResetPassword';
import PostBlog from './components/PostBlog';
import Others from './components/ReadBlogs/Others';
import EntertainmentComponent from './components/ReadBlogs/Entertainment';
import SportsComponent from './components/ReadBlogs/Sports';
import BreakingNewsComponent from './components/ReadBlogs/BreakingNews';
import TechnologyComponent from './components/ReadBlogs/Technology';
import MyBlogs from './components/ReadBlogs/MyBlogs';

export default function App() {
  const { user, isAuth } = useSelector((state) => state.user);

  const ProtectedProfile = () => {
    return isAuth ? <Profile /> : <Navigate to="/signin" />;
  };

  const ProtectedUpdateProfile = () => {
    return isAuth ? <UpdateProfile /> : <Navigate to="/signin" />;
  };

  const BlogPost=()=>{
    return isAuth? <PostBlog />:<Navigate to='/signin'/>
  }
  const Other=()=>{
    return isAuth?<Others/>:<Navigate to='/signin'/>
  }
  const Entertainment=()=>{
    return isAuth?<EntertainmentComponent/>:<Navigate to='/signin'/>
  }
  const Sports=()=>{
    return isAuth?<SportsComponent/>:<Navigate to='/signin'/>
  }
  const Technology=()=>{
    return isAuth?<TechnologyComponent/>:<Navigate to='/signin'/>
  }
  const BreakingNews=()=>{
    return isAuth?<BreakingNewsComponent/>:<Navigate to='/signin'/>
  }
  const MyBlog=()=>{
    return isAuth?<MyBlogs/>:<Navigate to='/signin'/>
  }
  return (
    <> 
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/profile" element={<ProtectedProfile />} />
        <Route path="/update" element={<ProtectedUpdateProfile />} />
        <Route path="/user/forget-link/:id" element={<ResetPassword />} />
        <Route path='/post-blog' element={<BlogPost/>}/>
        <Route path='/others' element={<Other/>}/>
        <Route path='/entertainment' element={<Entertainment/>}/>
        <Route path='/sports' element={<Sports/>}/>
        <Route path='/breaking-news' element={<BreakingNews/>}/>
        <Route path='/technology' element={<Technology/>}/>
        <Route path='/your-blog' element={<MyBlog/>}/>
      </Routes>
      <Footer />
    </>
  );
}
