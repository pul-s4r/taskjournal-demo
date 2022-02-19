import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';

import JobManager from './screens/JobManager.jsx';
import JobView from './screens/JobView.jsx';

const App = () => {

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<JobManager/>}/>
          <Route path="/owner" element={<JobView/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
