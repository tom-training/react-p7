import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import Apropos from './pages/Apropos'
import Error from './pages/Error'

import Card from './pages/Card'


import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Router>
  
      <Routes>
        
        <Route path="/react-p7/" element={<Home />} />

        <Route path="/react-p7/card/:id" element={<Card />} />

        <Route path="/react-p7/a_propos" element={<Apropos />} />

        <Route path="/react-p7/error" element={<Error />} />

        <Route path="." element={<Error />} />
      
      </Routes>

      <Footer />

    </Router>  

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
