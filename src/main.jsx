import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { UserAuthContextProvider } from './context/UserAuthcontext.jsx'
import Footer from './components/Footer.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  createBrowserRouter,
  RouterProvider,
}from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/footer",
    element: <Footer />
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserAuthContextProvider>
      <RouterProvider router={router}/>
    </UserAuthContextProvider>
  </React.StrictMode>,
)
