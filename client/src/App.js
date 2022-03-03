import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';

import HomeScreen from './screens/HomeScreen.jsx';
import JobManager from './screens/JobManager.jsx';
import JobView from './screens/JobView.jsx';
import LoginScreen from './screens/LoginScreen.jsx';
import { AuthProvider } from './contexts/AuthContext.js';

const App = () => {

  return (
    <div className="app">
      <AuthProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeScreen/>}/>
                <Route path="/login" element={<LoginScreen/>}/>
                <Route path="/contractor" element={<JobManager/>}/>
                <Route path="/owner" element={<JobView/>}/>
            </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
