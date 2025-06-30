import React from 'react'
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Home from "./pages/Dashboard/Home";
import Expence from "./pages/Dashboard/Expence";
import Income from "./pages/Dashboard/Income";
import { Toaster } from "react-hot-toast";


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import UserProvider from './context/UserContext';

const App = () => {
  return (
    <UserProvider>
      <div className=''>
          <Router>
            <Routes>
              <Route path='/' element={<Root/>} />
              <Route path='/login' exact element={<Login />} />
              <Route path='/signup' exact element={<Signup />} />
              <Route path='/dashboard' exact element={<Home />} />
              <Route path='/income' exact element={<Income/>} />
              <Route path='/expense' exact element={<Expence/>} />
            </Routes>
          </Router>
      </div>

      <Toaster
          toastOptions={{
            className:"",
            style: {
              fontSize: '13px'
            },
          }}
        />
    </UserProvider>
  )
}

export default App;

const Root = () => {
  //Check if token exists in localStorage
  const isAuthenticated = !!localStorage.getItem("token");

  //Redirect to dashboard if authenticated, otherwise to login
  return isAuthenticated ? (
    <Navigate to="/dashboard" />
  ) : (
    <Navigate to="/login" />
  );
}