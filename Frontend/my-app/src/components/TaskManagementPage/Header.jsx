import React from 'react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

function Header() {
    let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/Login`; 
    navigate(path);
  }

  const SignRoute = () =>{
    let path = `/Signup`;
    navigate(path);
  }

  const homeRoute = () =>{
    let path = `/`;
    navigate(path);
  }



  return (
    <header className="flex z-10 flex-col px-20 w-full max-md:px-5 max-md:max-w-full select-none">
      <div className="flex gap-5 w-full max-md:flex-wrap max-md:max-w-full">
        <h1 className="flex-auto text-6xl font-semibold tracking-tight text-indigo-800 max-md:text-4xl" onClick={homeRoute}>
          Workflo<span className='text-black'>!</span>
        </h1>
        <nav className="flex gap-5 items-center self-start max-md:flex-wrap max-md:max-w-full">
          
          <Button variant="primary" onClick={SignRoute}>Sign Up</Button>
          <Button variant="secondary" onClick={routeChange}>Login</Button>
        </nav>
      </div>
    </header>
  );
}

export default Header;