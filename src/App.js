import './App.css';
import React, { createContext, useContext, useState } from 'react';
import Layout from './Components/Layout/Layout';
import HomePage from './Modules/HomePage';
import CataloguePage from './Modules/CataloguePage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import GemPage from './Modules/GemPage';
import CartPage from './Modules/CartPage';
import SuccessPage from './Modules/SuccessPage';
import FormPage from './Modules/FormPage';
import SignInPage from './Modules/SignInPage';
import LoginPage from './Modules/LogInPage';
import { AuthContext } from './context/authentification_context/Auth';


export default function App() {
  return (
    
      <Router>
        <Layout>
          <AppRoutes />
        </Layout>
      </Router>
  );
}

function AppRoutes(props) {
  const {isAuthentificated} = useContext(AuthContext);


  return (
    <Routes>
      <Route path="/" element={isAuthentificated ? <HomePage /> : <Navigate to="/log-in" />} />
      <Route path="/catalogue" element={isAuthentificated ? <CataloguePage /> : <Navigate to="/log-in" />} />
      <Route path="/catalogue/:id" element={isAuthentificated ? <GemPage /> : <Navigate to="/log-in" />} />
      <Route path="/cart" element={isAuthentificated ? <CartPage /> : <Navigate to="/log-in" />} />
      <Route path="/buy-form" element={isAuthentificated ? <FormPage /> : <Navigate to="/log-in" />} />
      <Route path="/success" element={isAuthentificated ? <SuccessPage /> : <Navigate to="/log-in" />} />
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/log-in" element={<LoginPage />} />
    </Routes>
  )
}
