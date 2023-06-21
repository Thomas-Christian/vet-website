import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css';
import ViewCompanies from './components/ViewCompanies';
import Home from './components/Home';
import Admin from './components/Admin';
import LoginForm from './user/LoginForm';
import CurrentUserProvider from './contexts/CurrentUser';

export default function App() {
  return (
    <CurrentUserProvider>
    <BrowserRouter>

        <Routes>

          <Route path="/" element={ <Home />} />
          <Route path="/companies/:category" element={ <ViewCompanies /> } />
          <Route path="/admin/login" element={ <LoginForm /> } />

          <Route path="/view/admin" element={ <Admin />} />

        </Routes>

      </BrowserRouter>
      </CurrentUserProvider>
  );
}