import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';

import UserPage from './screen/UserPage'
import Login from './screen/Login'
import Signup from './components/Signup/SignupWelcome'
import NotFoundPage from './screen/Error';
import CreateTask from './components/NewTask/CreateTask';
import Homepage from './components/TaskManagementPage/TaskMangementPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,   
    errorElement: <NotFoundPage/>
  },
  {
    path:"/Login",
    element: <Login/>,
    errorElement:<NotFoundPage/>
  },
  {
    path:"/Signup",
    element: <Signup/>,
    errorElement:<NotFoundPage/>
  },
  {
    path:"/CreateTask",
    element:<CreateTask/>,
    errorElement:<NotFoundPage/>
  },
  {
    path:"/Userpage",
    element:<UserPage/>,
    errorElement:<NotFoundPage/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router ={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
