import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css';
import ViewCompanies from './components/ViewCompanies';
import Home from './components/Home';
import Admin from './components/Admin';

export default function App() {
  return (
    <BrowserRouter>

        <Routes>
          
          <Route path="/" element={ <Home />} />
          <Route path="/companies/:category" element={ <ViewCompanies /> } />

          <Route path="/view/admin" element={ <Admin />} /> 

        </Routes>

      </BrowserRouter>
  );
}