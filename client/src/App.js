import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';

import HomeScreen from './screens/HomeScreen.jsx';
import LoginScreen from './screens/LoginScreen.jsx';
import RegisterScreen from './screens/RegisterScreen.jsx';
import DeployerScreen from './screens/DeployerScreen.jsx';
import ManageScreen from './screens/ManageScreen.jsx';
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
                <Route path="/contracts" element={<DeployerScreen/>}/>
                <Route path="/manage" element={<ManageScreen/>}/>
            </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
