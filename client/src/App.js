import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';

import HomeScreen from './screens/HomeScreen.jsx';
import JobManager from './screens/JobManager.jsx';
import JobView from './screens/JobView.jsx';
import LoginScreen from './screens/LoginScreen.jsx';
import RegisterScreen from './screens/RegisterScreen.jsx';
import DeployerScreen from './screens/DeployerScreen.jsx';
import { AuthProvider } from './contexts/AuthContext.js';

const App = () => {

  return (
    <div className="app">
      <AuthProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeScreen/>}/>
                <Route path="/login" element={<LoginScreen/>}/>
                <Route path="/register" element={<RegisterScreen/>}/>
                <Route path="/contractor" element={<JobManager/>}/>
                <Route path="/owner" element={<JobView/>}/>
                <Route path="/contracts" element={<DeployerScreen/>}/>
            </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
