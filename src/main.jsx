import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Layout/Root';
import Home from './Components/Pages/Home/Home';
import Login from './Components/Pages/Login/Login';
import Register from './Components/Pages/Register/Register';
import Authproviders from './Providers/Authproviders';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import DashBoardLayout from './Components/Pages/Dashboard/DashBoardLayout';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home> </Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ]
  },
  {
    path : "/dashboard",
    element : <DashBoardLayout></DashBoardLayout>,
    children : [
      {
        path : "/dashboard",
        element : <Dashboard></Dashboard>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authproviders>
      <RouterProvider router={router} />
    </Authproviders>
  </React.StrictMode>,
)
