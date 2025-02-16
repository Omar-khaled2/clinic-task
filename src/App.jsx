import React, { Component } from 'react'
import Navbar from './components/layout/Navbar'
import './App.css';
import TopBar from './components/TopBar';
import Footer from './components/layout/Footer';
import { motion } from 'framer-motion';
import { Route, Routes } from 'react-router-dom';
import Appoiment from './components/layout/Appoiment';
import LandingPage from './components/LandingPage';

export default class App extends Component {
  render() {
    return <>
        <TopBar/>
        <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/appointment' element={<Appoiment />} />
      </Routes>

      
        <Footer/>
        
      </>
    
  }
}
