import React, { useEffect } from 'react';
import Sidebar from '../SideBar/Sidebar';
import MainContent from '../MainContent/MyComponent/MainContent';
import { useNavigate } from 'react-router-dom';

function Layout() {
  const navigate = useNavigate();
  useEffect(()=>{
    if(!localStorage.getItem('token')){
      navigate('/')
    }
  },[navigate])
  return (
    <div className="pr-8 bg-neutral-100 max-md:pr-5">
      <div className="flex gap-5 max-md:flex-col">
        <Sidebar />
        <MainContent />
      </div>
    </div>
    
  );
}

export default Layout;