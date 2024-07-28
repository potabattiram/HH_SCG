// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AppHeader from './Components/subcompos/AppHeader';
import MainHomePage from './Pages/MainHomePage';

const App = () => {
  return (
    <Router>
      <AppHeader/>
      <Routes>
        <Route path="/" element={<MainHomePage />} />
      
      </Routes>
    </Router>
  );
};

export default App;
